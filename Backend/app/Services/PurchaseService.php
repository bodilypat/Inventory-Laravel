<!-- app/Services/PurchaseService.php 
| -- This service handles purchase-related logic.
| -- It provides methods for creating and retrieving purchase information.
| -->
<?php

namespace App\Services;

use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderItem;
use App\Models\StockMovement;
use Illuminate\Support\Facades\DB;

class PurchaseService extends BaseService
{
    /* Create a new purchase order */
    public function createPurchaseOrder(array $data): PurchaseOrder
    {
        return DB::transaction(function () use ($data) {
            $purchase = PurchaseOrder::create([
                'supplier_name' => $data['supplier_name'],
                'total_amount' => $data['total_amount'],
            ]);

            foreach ($data['items'] as $item) {
                PurchaseOrderItem::create([
                    'purchase_order_id' => $purchase->id,
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);

                // Stock IN
                StockMovement::create([
                    'product_id' => $item['product_id'],
                    'type' => 'IN',
                    'quantity' => $item['quantity'], // Increase stock
                    'reference_type' => 'purchase',
                    'description' => 'Purchased product',
                ]);

                // Increase stock
                StockMovement::create([
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'], // Increase stock
                    'type' => 'purchase',
                ]);
            }   
        
            return $purchase;
        });

    /* Retrieve purchase order information */
    public function getPurchaseOrder($id): PurchaseOrder
    {
        try {
            return PurchaseOrder::with('items')->findOrFail($id);
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }
}
