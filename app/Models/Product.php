<?php

namespace App\Models;

use App\Services\Search\QueryFilters;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends PrimaryModel
{
    use ProductHelpers, SoftDeletes, ModelHelpers;
    protected $localeStrings = ['name', 'description', 'notes'];
    protected $guarded = [''];
    protected $appends = ['isOnSale'];
    protected $dates = ['created_at','deleted_at','start_sale','end_sale'];
    protected $casts = [
        'on_sale' => 'boolean',
        'on_sale_on_homepage' => 'boolean',
        'active' => 'boolean',
        'home_delivery_availability' => 'boolean'
    ];

    /**
     * MorphRelation
     * MorphOne = many hasONe relation
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function gallery()
    {
        return $this->morphOne(Gallery::class, 'galleryable');
    }


    /**
     * Product Attribute
     * hasMany Relation
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function product_attributes()
    {
        return $this->hasMany(ProductAttribute::class);
    }

    /**
     * Usage : product belongs to one order_meta
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function order_meta()
    {
        return $this->belongsTo(OrderMeta::class);
    }

    /**
     * ManyToMany Relation
     * Product Color
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function colors()
    {
        return $this->belongsToMany(Color::class, 'product_attributes', 'product_id', 'color_id');
    }


    /**
     * ManytoMany Relation
     * Product Size
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function sizes()
    {
        return $this->belongsToMany(Size::class, 'product_attributes', 'product_id', 'size_id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_product');
    }

    public function favorites()
    {
        return $this->belongsToMany(User::class, 'favorites');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'product_tag');
    }

    public function brands()
    {
        return $this->belongsToMany(Brand::class,'brand_product');
    }

    /**
     * @param $q
     * @param QueryFilters $filters
     * @return \Illuminate\Database\Eloquent\Builder
     * QueryFilters used within the search
     */
    public function scopeFilters($q, QueryFilters $filters)
    {
        return $filters->apply($q);
    }
}
