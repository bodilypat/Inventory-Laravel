<!-- database/migrations/create_stock_movements_table.php 
| -- This migration creates the stock_movements table in the database.
-->
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockMovementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_movements', function (Blueprint $table) {
            $table->bigIncrements('stock_movement_id');
            $table->unsignedBigInteger('product_id');
            $table->integer('quantity');
            $table->enum('movement_type', ['in', 'out']);
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('product_id')->references('product_id')->on('products')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stock_movements');
    }
}

