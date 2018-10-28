<?php

use App\Models\Notification;
use App\Models\Project;
use Faker\Generator as Faker;

$factory->define(Notification::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'description' => $faker->name,
        'type' => $faker->randomElement(['message','product']),
        'path' => '1.pdf',
        'image' => $faker->numberBetween(1, 10) . '.jpg',
        'notifiable_id' => Product::active()->hasGallery()->hasAttributes()-pluck('id')->unique()->shuffle()->first(),
        'notifiable_type' => $faker->randomElement(['App\Src\Product\Product']),
    ];
});
