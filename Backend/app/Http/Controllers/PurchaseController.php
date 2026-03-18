<!-- app/Http/Controllers/PurchaseController.php
 purchases field 
 purchase_order_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    supplier_id BIGINT REFERENCES suppliers(supplier_id) ON DELETE SET NULL,
    total_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,

    CONSTRAINT fk_supplier_po FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id) ON DELETE SET NULL
);
 -->
<?php
namespace App\Http\Controllers;

use App\Models\Purchase;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    // Display a listing of the purchases
    public function index(Request $request)
    {
        $query = Purchase::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('supplier', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            });
        }

        $purchases = $query->paginate(10);
        return view('purchases.index', compact('purchases'));
    }

    /* Store a new purchase */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'supplier_id' => 'nullable|exists:suppliers,supplier_id',
            'total_amount' => 'required|numeric|min:0',
        ]);

        $purchase = Purchase::create($validatedData);
        return redirect()->route('purchases.index')->with('success', 'Purchase created successfully.');
    }

    // Show single purchase
    public function show($id)
    {
        $purchase = Purchase::find($id);
        return response()->json($purchase);
    }

    // Update the specified purchase in storage
    public function update(Request $request, $id)
    {
        $purchase = Purchase::find($id);
        if (!$purchase) {
            return response()->json(['message' => 'Purchase not found'], 404);
        }

        $validatedData = $request->validate([
            'supplier_id' => 'nullable|exists:suppliers,supplier_id',
            'total_amount' => 'required|numeric|min:0',
        ]);

        $purchase->update($validatedData);
        return response()->json(['message' => 'Purchase updated successfully']);
    }

    // Remove the specified purchase from storage
    public function destroy($id)
    {
        $purchase = Purchase::find($id);
        if (!$purchase) {
            return response()->json(['message' => 'Purchase not found'], 404);
        }

        $purchase->delete();
        return response()->json(['message' => 'Purchase deleted successfully']);
    }

    // Get purchases by supplier
    public function getBySupplier($supplier_id)
    {
        $purchases = Purchase::where('supplier_id', $supplier_id)->get();
        return response()->json($purchases);
    }

    // Get purchases report
    public function report(Request $request)
    {
        $query = Purchase::query();

        /* Filter by date range */
        if ($request->has('start_date') && $request->has('end_date')) {
            $query->whereBetween('created_at', [$request->start_date, $request->end_date]);

            /* Filter by supplier */
            if ($request->has('supplier_id')) {
                $query->where('supplier_id', $request->supplier_id);
            }

        }
        $purchases = $query->get();
        return response()->json($purchases);
    }

    
}