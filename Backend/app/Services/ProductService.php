<!-- app/Services/ProductService.php 
 | -- This service handles product-related logic.
 | -- It provides methods for retrieving, creating, updating, and deleting product information.
 -->

<?php
namespace App\Services;

use App\Models\Product;
use Illuminate\Models\StockMovement;

class ProductService extends BaseService
{
    /* Retrieve product information */
    public function getProduct($id)
    {
        try {
            return Product::findOrFail($id);
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Create a new product */
    public function createProduct($data)
    {
        try {
            $product = Product::create($data);
            return $product;
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }
    
    /* Update product information */
    public function updateProduct($id, $data)
    {
        try {
            $product = Product::findOrFail($id);
            $product->update($data);
            return $product;
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Delete a product */
    public function deleteProduct($id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();
            return true;
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Handle stock movement for a product */
    public function handleStockMovement($productId, $quantity, $type)
    {
        try {
            // Create a new stock movement record
            StockMovement::create([
                'product_id' => $productId,
                'quantity' => $quantity,
                'type' => $type,
            ]);

            // Update the product's stock quantity
            $product = Product::findOrFail($productId);
            if ($type === 'in') {
                $product->stock_quantity += $quantity;
            } elseif ($type === 'out') {
                if ($product->stock_quantity < $quantity) {
                    throw new \Exception('Insufficient stock');
                }
                $product->stock_quantity -= $quantity;
            }
            $product->save();

            return true;
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }
}
