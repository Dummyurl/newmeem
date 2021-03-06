<?php

use App\Models\Gallery;
use App\Models\Image;
use Faker\Generator as Faker;

$factory->define(Image::class, function (Faker $faker) {
    return [
        'gallery_id' => Gallery::all()->random()->id,
        'path' => $faker->numberBetween(1, 10) . '.jpg',
        'caption_en' => $faker->paragraph(1),
        'caption_ar' => $faker->paragraph(1),
        'order' => $faker->numberBetween(1, 10),
    ];
});
