<?php

namespace App\Services\Search;

use App\Models\Category;
use Illuminate\Http\Request;

/**
 * Created by PhpStorm.
 * User: usamaahmed
 * Date: 2/7/17
 * Time: 8:40 AM
 */
class Filters extends QueryFilters
{
    public $category;

    public function __construct(Request $request, Category $category)
    {
        parent::__construct($request);
        $this->category = $category;
    }

    public function search($search)
    {
        return $this->builder
            ->where('name_ar', 'like', "%{$search}%")
            ->orWhere('name_en', 'like', "%{$search}%")
            ->orWhere('description_ar', 'like', "%{$search}%")
            ->orWhere('description_en', 'like', "%{$search}%")
            ->orWhere('notes_ar', 'like', "%{$search}%")
            ->orWhere('notes_en', 'like', "%{$search}%");
    }

    public function category_id()
    {
        $parent = $this->category->whereId(request()->category_id)->with('children.products')->first();
        if ($parent->children->isNotEmpty() && $parent->children->pluck('products')->isNotEmpty()) {
            $children = $parent->children->pluck('id');
            return $this->builder->whereHas('categories', function ($q) use ($parent, $children) {
                if ($parent->children->isEmpty()) {
                    return $q->where('id', request('category_id'));
                }
                return $q->whereIn('id', $children);
            });
        }
        return $this->builder->whereHas('categories', function ($q) {
            return $q->where('id', request()->category_id);
        });
    }

    public function tag_id()
    {
        return $this->builder->whereHas('tags', function ($q) {
            return $q->where('id', request()->tag_id);
        });
    }

    public function brand_id()
    {
        return $this->builder->whereHas('brands', function ($q) {
            return $q->where('id', request()->brand_id);
        });
    }

    public function color_id()
    {
        return $this->builder->whereHas('product_attributes', function ($q) {
            return $q->where('color_id', request()->color_id);
        });
    }

    public function size_id()
    {
        return $this->builder->whereHas('product_attributes', function ($q) {
            return $q->where('size_id', request()->size_id);
        });
    }

    public function on_sale()
    {
        return $this->builder->where('on_sale', true);
    }

    public function min()
    {
        return $this->builder->where('price', '>=', request()->min);
    }

    public function max()
    {
        return $this->builder->where('price', '<=', request()->max);
    }

    public function page()
    {
        return $this->builder;
    }

    public function sort()
    {
        switch (request('sort')) {
            case 'name' :
                return $this->builder->orderBy('name_en', 'asc');
            default :
                return $this->builder->orderBy('price', request('sort'));
        }
    }

}