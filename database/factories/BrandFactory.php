<?php

use App\Models\Brand;
use Faker\Generator as Faker;

$factory->define(Brand::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'slug_ar' => $faker->word,
        'slug_en' => $faker->word,
    ];
});
