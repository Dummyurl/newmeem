<?php

use App\Models\Brand;
use Faker\Generator as Faker;

$factory->define(Brand::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'slug_ar' => $faker->word,
        'slug_en' => $faker->word,
        'image' => $faker->numberBetween(1, 10) . '.jpg',
        'is_home' => 1,
        'order' => $faker->numberBetween(1,10),
    ];
});
