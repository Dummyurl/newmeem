<?php
/**
 * Created by PhpStorm.
 * User: usama
 * Date: 5/13/18
 * Time: 11:07 AM
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

trait ProductHelpers
{
    public function scopeOnSale($q)
    {
        return $q->where('on_sale', true)->where('end_sale', '>=', Carbon::today());
    }

    public function getIsOnSaleAttribute()
    {
        return $this->on_sale && $this->end_sale >= Carbon::today() ? true : false;
    }

    public function scopeOnHomePage($q)
    {
        return $q->where('on_homepage', true);
    }

    public function scopeOnSaleOnHomePage($q)
    {
        return $q->onSale()->where('on_sale_on_homepage', true);
    }

    public function getFinalPriceAttribute()
    {
        return $this->on_sale ? $this->sale_price : $this->price;
    }

    public function getConvertedFinalPriceAttribute()
    {
        $currentCurrency = session()->get('currency');
        return $this->finalPrice * $currentCurrency->exchange_rate;
    }

    public function getConvertedPriceAttribute()
    {
        $currentCurrency = session()->get('currency');
        return $this->price * $currentCurrency->exchange_rate;
    }

    public function getConvertedSalePriceAttribute()
    {
        $currentCurrency = session()->get('currency');
        return $this->sale_price * $currentCurrency->exchange_rate;
    }


    /**
     * Description : will fetch all products of the current company (and branch) that are bestSales
     * according to the orders that are completed
     * @param $companyId
     * @return mixed
     */
    public function scopeBestSalesProducts()
    {
        return DB::table('products')
            ->where(['products.active' => 1])
            ->join('orders', function ($j) {
                $j->where('orders.status', '=', 'success');
            })
            ->join('order_metas', function ($j) {
                $j->on('orders.id', '=', 'order_metas.order_id')->on('products.id', '=', 'order_metas.product_id');
            })
            ->select('products.id', DB::raw('count(*) as count'))
            ->groupBy('products.id')// responsible to get the sum of products returned
            ->orderBy('count', 'DESC')// DESC
            ->take(7)->pluck('id');
    }

    public function getRelatedProducts($product)
    {
        $categoriesId = $product->categories->pluck('id');
        return $this->whereHas('categories', function ($q) use ($categoriesId) {
            return $q->whereId($categoriesId);
        })->with('gallery.images', 'favorites')->take(4)->get();
    }

    public function getTotalQtyAttribute()
    {
        return $this->product_attributes->sum('qty');
    }

    public function scopeHasProductAttribute($q)
    {
        return $q->has('product_attributes', '>', 0);
    }

    public function scopeHasGallery($q)
    {
        return $q->has('gallery', '>', 0);
    }

    public function getIsFavoritedAttribute()
    {
        return auth()->check() ? in_array(auth()->user()->id, $this->favorites->pluck('id')->toArray()) : null;
    }

}