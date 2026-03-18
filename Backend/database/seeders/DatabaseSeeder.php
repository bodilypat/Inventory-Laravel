<!-- database/seeders/DatabaseSeeder.php 
| -- This seeder initializes the database with default settings. 
-->
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            SupplierSeeder::class,
            ProductSeeder::class,
            SettingSeeder::class,
        ]);
    }
}


