<!-- app/Models/StockLog.php  
| -- This model represents a stock log in the inventory system. 
-->
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockLog extends Model
{
    use HasFactory;

    protected $table = 'stock_logs';
    protected $primaryKey = 'stock_log_id';
    public $timestamps = false; // Disable Laravel's default timestamps

    protected $fillable = [
        'product_id',
        'user_id',
        'action',
        'description',
        'created_at',
    ];

    // Define relationship to Product
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    // Define relationship to User
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

