<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

         $this->call(CountriesTableSeeder::class);
         $this->call(CurrenciesTableSeeder::class);
         $this->call(SettingsTableSeeder::class);
         $this->call(PoliciesTableSeeder::class);
         $this->call(CategoriesTableSeeder::class);
         $this->call(ColorsTableSeeder::class);
         $this->call(SizesTableSeeder::class);
         $this->call(FaqsTableSeeder::class);
        $this->call(SlidersTableSeeder::class);
        $this->call(TermsTableSeeder::class);
        $this->call(PagesTableSeeder::class);
        $this->call(NewslettersTableSeeder::class);
        $this->call(BranchesTableSeeder::class);
        $this->call(ShipmentPackgesTableSeeder::class);

        $this->call(UsersTableSeeder::class);
         $this->call(ProductsTableSeeder::class);
        $this->call(CouponsTableSeeder::class);
        $this->call(OrdersTableSeeder::class);
         $this->call(FavoritesTableSeeder::class);
         $this->call(TagsTableSeeder::class);
         $this->call(BrandsTableSeeder::class);
         $this->call(AboutusTableSeeder::class);


    }
}
