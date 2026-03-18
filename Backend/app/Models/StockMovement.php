<!-- app/Models/StockMovement.php 
| This model represents a stock movement in the inventory system.
    StockMovement fields:
    stock_movement_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    product_id BIGINT REFERENCES products(product_id) ON DELETE SET NULL,
    quantity_change INT NOT NULL,
    movement_type VARCHAR(20) NOT NULL CHECK (movement_type IN ('in', 'out')),
    created_at TIMESTAMP NULL,

    CONSTRAINT fk_product_sm FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE SET NULL
| -->
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockMovement extends Model
{
    use HasFactory;

    protected $table = 'stock_movements';
    protected $primaryKey = 'stock_movement_id';
    public $timestamps = false; // Disable Laravel's default timestamps

    protected $fillable = [
        'product_id',
        'quantity_change',
        'movement_type',
        'created_at',
    ];

    // Define relationship to Product
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}

