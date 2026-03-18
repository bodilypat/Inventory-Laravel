<!-- app/Services/LogService.php 
| -- This service handles logging-related logic.
  -->
<?php
namespace App\Services;

use App\Models\InventoryLog;

class LogService extends BaseService
{
    /* Log inventory-related actions */
    public function logInventoryAction($productId, string $action, int $quantity, string $description = null)
    {
        try {
            InventoryLog::create([
                'product_id' => $productId,
                'action' => $action,
                'quantity' => $quantity,
                'description' => $description,
            ]);
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Get inventory logs for a product */
    public function getInventoryLogs($productId)
    {
        try {
            return InventoryLog::where('product_id', $productId)->orderBy('created_at', 'desc')->get();
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }
}

