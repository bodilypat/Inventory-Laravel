<!-- //app/Http/Controllers/SupplierController.php 
| -- This file is part of the Inventory Management System (IMS) project.
| -- This controller manages CRUD operations for suppliers in the inventory management system.
| -- It includes methods for listing, creating, showing, updating, and deleting suppliers.
| -->

<?php
namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    // Display a listing of the suppliers
    public function index(Request $request)
    {
        $query = Supplier::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->where('contact_person', 'like', "%$search%")
                  ->orWhere('contact_email', 'like', "%$search%");
        }

        $suppliers = $query->paginate(10);
        return view('suppliers.index', compact('suppliers'));
    }

    /* Store a new supplier */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'contact_person' => 'required|string|max:100',
            'contact_email' => 'required|string|email|max:100',
            'contact_phone' => 'nullable|string|max:20',
            'address' => 'nullable|string'
        ]);

        $supplier = Supplier::create($validatedData);
        return redirect()->route('suppliers.index')->with('success', 'Supplier created successfully.');
    }

    // Show single supplier
    public function show($id)
    {
        $supplier = Supplier::find($id);
        return response()->json($supplier);
    }

    // Update the specified supplier in storage
    public function update(Request $request, $id)
    {
        $supplier = Supplier::find($id);
        if (!$supplier) {
            return response()->json(['message' => 'Supplier not found'], 404);
        }

        $validatedData = $request->validate([
            'contact_person' => 'required|string|max:100',
            'contact_email' => 'required|string|email|max:100',
            'contact_phone' => 'nullable|string|max:20',
            'address' => 'nullable|string'
        ]);

        $supplier->update($validatedData);
        return response()->json($supplier);
    }

    // Remove the specified supplier from storage
    public function destroy($id)
    {
        $supplier = Supplier::find($id);
        if (!$supplier) {
            return response()->json(['message' => 'Supplier not found'], 404);
        }

        $supplier->delete();
        return response()->json(['message' => 'Supplier deleted successfully.']);
    }

        // Soft delete the specified supplier from storage
    public function softDelete($id)
    {
        $supplier = Supplier::find($id);
        if (!$supplier) {
            return response()->json(['message' => 'Supplier not found'], 404);
        }

        $supplier->delete();
        return response()->json(['message' => 'Supplier soft deleted successfully.']);
    }

    /* Restore soft deleted supplier (optional) */
    public function restore($id)
    {
        $supplier = Supplier::withTrashed()->find($id);
        if (!$supplier) {
            return response()->json(['message' => 'Supplier not found'], 404);
        }

        $supplier->restore();
        return response()->json(['message' => 'Supplier restored successfully.']);
    }

}

