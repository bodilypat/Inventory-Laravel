<!-- app/Http/Controllers/ProductController.php -->
<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Display a listing of the products
    public function index(Request $request)
    {
        $query = Product::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('sku', 'like', "%$search%");
            });
        }

        // Filter by category
        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        // Filter by supplier
        if ($request->has('supplier_id')) {
            $query->where('supplier_id', $request->supplier_id);
        }

        $products = $query->paginate(10);
        return view('products.index', compact('products'));
    }

    /* Store a new product */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:100',
            'sku' => 'required|string|unique:products,sku|max:50',
            'category_id' => 'nullable|exists:categories,category_id',
            'supplier_id' => 'nullable|exists:suppliers,supplier_id',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'description' => 'nullable|string'
        ]);

        $product = Product::create($validatedData);
        return redirect()->route('products.index')->with('success', 'Product created successfully.');
    }

    // Show single product
    public function show($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    // Update the specified product in storage
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:100',
            'sku' => 'required|string|unique:products,sku,' . $product->product_id . '|max:50',
            'category_id' => 'nullable|exists:categories,category_id',
            'supplier_id' => 'nullable|exists:suppliers,supplier_id',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'description' => 'nullable|string'
        ]);

        $product->update($validatedData);
        return redirect()->route('products.index')->with('success', 'Product updated successfully.');
    }

    // Remove the specified product from storage
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return redirect()->route('products.index')->with('success', 'Product deleted successfully.');
    }

    // Soft delete the specified product
    public function softDelete($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return redirect()->route('products.index')->with('success', 'Product soft deleted successfully.');
    }

    // Restore the specified soft deleted product
    public function restore($id)
    {
        $product = Product::withTrashed()->findOrFail($id);
        $product->restore();
        return redirect()->route('products.index')->with('success', 'Product restored successfully.');
    }

    // Permanently delete the specified product
    public function forceDelete($id)
    {
        $product = Product::withTrashed()->findOrFail($id);
        $product->forceDelete();
        return redirect()->route('products.index')->with('success', 'Product permanently deleted successfully.');
    }
}

