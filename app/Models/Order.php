<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends PrimaryModel
{
    use SoftDeletes;

    /**
     * Order OrderMeta
     * hasMany
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function order_metas()
    {
        return $this->hasMany(OrderMeta::class);
    }

    /**
     * User Order
     * hasMany
     * reverse
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_metas', 'order_id', 'product_id');
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function scopeOfStatus($query, $type)
    {
        return $query->where('status', $type);

    }

    public function getTotalPriceAttribute()
    {
        return $this->order_metas->sum('price');
    }
}
