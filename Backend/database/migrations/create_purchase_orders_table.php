<!-- database/migrations/create_purchase_orders_table.php 
| -- This migration creates the purchase_orders table in the database.
--> 

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_orders', function (Blueprint $table) {
            $table->bigIncrements('purchase_order_id');
            $table->unsignedBigInteger('supplier_id');
            $table->date('order_date');
            $table->decimal('total_amount', 10, 2);
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('supplier_id')->references('supplier_id')->on('suppliers')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchase_orders');
    }
}


