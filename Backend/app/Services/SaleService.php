<!-- app/Services/SaleService.php 
| -- This service handles sale-related logic.
| -- It provides methods for creating and retrieving sale information.
| -->
<?php
namespace App\Services;

use App\Models\Sale;
use App\Models\SaleItem;
use App\Models\StockMovement;
use Illuminate\Support\Facades\DB;

class SaleService extends BaseService
{
    /* Create a new sale */
    public function createSale(array $data): Sale
    {
        return DB::transaction(function () use ($data) {
            $sale = Sale::create([
                'customer_name' => $data['customer_name'],
                'total_amount' => $data['total_amount'],
            ]);

            foreach ($data['items'] as $item) {
                SaleItem::create([
                    'sale_id' => $sale->id,
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);

                // Handle stock movement
                StockMovement::create([
                    'product_id' => $item['product_id'],
                    'quantity' => -$item['quantity'], // Decrease stock
                    'type' => 'sale',
                ]);
            }

            return $sale;
        });
    }

    /* Retrieve sale information */
    public function getSale($id): Sale
    {
        try {
            return Sale::with('items')->findOrFail($id);
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }
}

