<!-- app/Http/Controllers/InventoryController.php 
| -- This file is part of the Inventory Management System (IMS) project.
| -- This controller manages CRUD operations for inventory movements in the inventory management system. 
 -->
<?php
namespace App\Http\Controllers;

use App\Models\Inventory;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    // Display a listing of the inventory movements
    public function index(Request $request)
    {
        $query = Inventory::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('product', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%");
            });
        }

        $inventoryMovements = $query->paginate(10);
        return view('inventory.index', compact('inventoryMovements'));
    }

    /* Store a new inventory movement */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'product_id' => 'nullable|exists:products,product_id',
            'quantity' => 'required|integer|min:0',
            'movement_type' => 'required|in:in,out',
        ]);

        $inventory = Inventory::create($validatedData);
        return redirect()->route('inventory.index')->with('success', 'Inventory movement recorded successfully.');
    }

    // Show single inventory movement
    public function show($id)
    {
        $inventory = Inventory::find($id);
        return response()->json($inventory);
    }

    // Update the specified inventory movement in storage
    public function update(Request $request, $id)
    {
        $inventory = Inventory::find($id);
        if (!$inventory) {
            return response()->json(['message' => 'Inventory movement not found'], 404);
        }

        $validatedData = $request->validate([
            'product_id' => 'nullable|exists:products,product_id',
            'quantity' => 'required|integer|min:0',
            'movement_type' => 'required|in:in,out',
        ]);

        $inventory->update($validatedData);
        return redirect()->route('inventory.index')->with('success', 'Inventory movement updated successfully.');
    }

    // Delete the specified inventory movement from storage
    public function destroy($id)
    {
        $inventory = Inventory::find($id);
        if (!$inventory) {
            return response()->json(['message' => 'Inventory movement not found'], 404);
        }

        $inventory->delete();
        return redirect()->route('inventory.index')->with('success', 'Inventory movement deleted successfully.');
    }

    // Get current stock level for a product
    public function stockLevel($productId)
    {
        $stockIn = Inventory::where('product_id', $productId)->where('movement_type', 'in')->sum('quantity');
        $stockOut = Inventory::where('product_id', $productId)->where('movement_type', 'out')->sum('quantity');
        $currentStock = $stockIn - $stockOut;

        return response()->json(['product_id' => $productId, 'current_stock' => $currentStock]);
    }

    // Get inventory report
    public function report(Request $request)
    {
        $query = Inventory::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('product', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%");
            });
        }

        $inventoryMovements = $query->paginate(10);
        return view('inventory.report', compact('inventoryMovements'));
    }
}



