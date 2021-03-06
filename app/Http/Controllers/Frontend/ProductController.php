<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\Size;
use App\Services\Search\Filters;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public $product;


    public function __construct(Product $product)
    {
        $this->product = $product;
    }


    public function index(Filters $filters)
    {
        $products = $this->product->filters($filters)->hasProductAttribute()->hasGallery()->active()->paginate(12);
        return view('frontend.modules.favorite.index', compact('products'));
    }

    public function search(Filters $filters)
    {
        $validator = validator(request()->all(), ['search' => 'nullable']);
        if ($validator->fails()) {
            return redirect()->route('frontend.home')->withErrors($validator->messages());
        }
        $elements = $this->product->active()->hasProductAttribute()->hasGallery()->filters($filters)->with('brands',
            'product_attributes.color', 'product_attributes.size', 'tags', 'gallery.images',
            'favorites', 'categories.children')->orderBy('id', 'desc')->paginate(20);
        $tags = $elements->pluck('tags')->flatten()->unique('id')->sortKeysDesc();
        $sizes = $elements->pluck('product_attributes')->flatten()->pluck('size')->flatten()->unique('id')->sortKeysDesc();
        $colors = $elements->pluck('product_attributes')->flatten()->pluck('color')->flatten()->unique('id')->sortKeysDesc();
        $brands = $elements->pluck('brands')->flatten()->flatten()->unique('id')->sortKeysDesc();
        $categoriesList = $elements->pluck('categories')->flatten()->unique('id');
        if (!$elements->isEmpty()) {
            $currentCategory =  request()->has('category_id') ? Category::whereId(request('category_id'))->first() : null;
            return view('frontend.modules.product.index', compact('elements', 'tags', 'colors', 'sizes', 'categoriesList','brands','currentCategory'));
        } else {
            return redirect()->route('frontend.home')->with('error', trans('message.no_items_found'));
        }
    }

    public function show($productId)
    {
        $product = $this->product->whereId($productId)->with('product_attributes.color', 'gallery.images', 'tags', 'categories')->first();
        // return array of ['size_id', 'color', 'att_id','qty' ] for one product
        $data = $product->product_attributes->unique('id')->toArray();
        $products = $this->product->getRelatedProducts($product);
        return view('frontend.modules.product.show', compact('products', 'product', 'data'));
    }

    /**
     * @param $productId
     * @param $sizeId
     * @return mixed
     * Usage : Product Details Page
     * Description : get all data (attribute_id + color + qty ) json response according to the sizeId
     */
    public function getDataFromSize($productId, $sizeId)
    {
        return $this->product->whereId($productId)->with('product_attributes')->first()->getDataFromSize($sizeId);
    }

    /**
     * @param $productId
     * @param $colorId
     * @return mixed
     * Usage : Product Details Page
     * Description : get all data (attribute_id + size + qty ) json response according to the colorId
     */
    public function getDataFromColor($productId, $colorId)
    {
        return $this->product->whereId($productId)->with('product_attributes')->first()->getDataFromColor($colorId);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * Usage : Search Input in the Homepage
     * Description : Search
     */
    public function searchItem(Request $request)
    {

        $products = $this->product->searchItem(trim($request->term));

        return view('frontend.modules.product.index', compact('products'));
    }

    public function getTaggedProducts($tagName)
    {

        $products = $this->product->whereHas('tagged', function ($q) use ($tagName) {
            $q->where('tag_name', '=', $tagName);
        })->paginate(9);

        return view('frontend.modules.tag.index', compact('products'));
    }


    public function getRecommendedProducts()
    {
        $product = Auth::user()->orders()->first()->order_metas()->first();

        $products = $this->product->getWhereId($product->product_id)->first()->categories()->first()->products()->take(6)->get();

        return view('frontend.modules.recommendations.index', compact('products'));

    }

    public function getColorsFromSize($id, $sizeId)
    {
        // attribute_id, colorId, Qty
        $colorList = $this->product->colorsFromSize($id, $sizeId);
        dd($colorList);
    }

}
