<?php

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Database\Seeder;

class BrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Brand::class, app()->environment('production') ? 1 : 50)->create()->each(function ($q) {
            if(app()->environment('local')) {
                return $q->products()->saveMany(Product::all()->random(5));
            }
        });
    }
}
