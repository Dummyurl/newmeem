<?php

namespace App\Models;

class Brand extends PrimaryModel
{
    protected $localeStrings = ['slug'];
    protected $guarded = [''];
    public function products() {
        return $this->belongsToMany(Product::class,'brand_product');
    }
}
