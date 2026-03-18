<!-- app/Services/InventoryService.php 
    | -- This service handles inventory-related logic.
    | -- It provides methods for managing stock levels and movements.
  -->
<?php
namespace App\Services;

use App\Models\StockMovement;

class InventoryService extends BaseService
{
    /* Handle ajust stock movement for a product */
    public function adjustStock($productId, int $quantity, string $type, string $description = null)
    {
        try {
            StockMovement::create([
                'product_id' => $productId,
                'type' => $type,
                'quantity' => $quantity,
                'reference_type' => $type,
                'description' => $description,
            ]);

            $product = \App\Models\Product::findOrFail($productId);
            $product->stock += ($type === 'IN') ? $quantity : -$quantity;

            $product->save();

        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Get current stock level for a product */
    public function getStockLevel($productId)
    {
        try {
            $product = \App\Models\Product::findOrFail($productId);
            return $product->stock;
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Get stock movement history for a product */
    public function getStockHistory($productId)
    {
        try {
            return StockMovement::where('product_id', $productId)->orderBy('created_at', 'desc')->get();
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Get all products with low stock */
    public function getLowStockProducts($threshold = 10)
    {
        try {
            return \App\Models\Product::where('stock', '<', $threshold)->get();
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }
}