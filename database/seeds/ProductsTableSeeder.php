<?php

use App\Models\Category;
use App\Models\Gallery;
use App\Models\Image;
use App\Models\Product;
use App\Models\ProductAttribute;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // each product has the following :
        // many product attributes and
        // belongs to many categories
        // has gallery with images
        // belongs to many orders !!!
        factory(Product::class, app()->environment('production') ? 8 : 200)->create()->each(function ($p) {
            $p->product_attributes()->saveMany(factory(ProductAttribute::class,3)->create());
            $p->categories()->saveMany(Category::all()->random(3));
            $gallery = factory(Gallery::class)->create();
            $p->gallery()->save($gallery);
            $gallery->images()->saveMany(factory(Image::class, 5)->create());
        });
    }
}
