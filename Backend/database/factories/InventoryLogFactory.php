<!-- database/factories/InventoryLogFactory.php 
| -- This factory creates default inventory logs for the application. 
-->
<?php

namespace Database\Factories;
use App\Models\InventoryLog;
use Illuminate\Database\Eloquent\Factories\Factory;

class InventoryLogFactory extends Factory
{
    protected $model = InventoryLog::class;

    public function definition()
    {
        return [
            'product_id' => $this->faker->numberBetween(1, 100), // Assuming you have 100 products
            'quantity_change' => $this->faker->numberBetween(-10, 10), // Can be positive (stock in) or negative (stock out)
            'log_type' => $this->faker->randomElement(['stock_movement', 'sale', 'purchase']), // Randomly choose between log types
            'log_date' => $this->faker->dateTimeThisYear(),
        ];
    }
}


