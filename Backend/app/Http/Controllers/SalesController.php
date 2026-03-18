<!-- app/Http/Controllers/SalesController.php
| -- This file is part of the Inventory Management System (IMS) project.
| -- This controller manages CRUD operations for sales in the inventory management system.
 -->
<?php
namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;

class SalesController extends Controller
{
    // Display a listing of the sales
    public function index(Request $request)
    {
        $query = Sale::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            });
        }

        $sales = $query->paginate(10);
        return view('sales.index', compact('sales'));
    }

    /* Store a new sale */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'nullable|exists:users,user_id',
            'total' => 'required|numeric|min:0',
        ]);

        $sale = Sale::create($validatedData);
        return redirect()->route('sales.index')->with('success', 'Sale created successfully.');
    }

    // Show single sale
    public function show($id)
    {
        $sale = Sale::find($id);
        return response()->json($sale);
    }

    // Update the specified sale in storage
    public function update(Request $request, $id)
    {
        $sale = Sale::find($id);
        if (!$sale) {
            return response()->json(['message' => 'Sale not found'], 404);
        }

        $validatedData = $request->validate([
            'user_id' => 'nullable|exists:users,user_id',
            'total' => 'required|numeric|min:0',
        ]);

        $sale->update($validatedData);
        return response()->json($sale);
    }

    // Remove the specified sale from storage
    public function destroy($id)
    {
        $sale = Sale::find($id);
        if (!$sale) {
            return response()->json(['message' => 'Sale not found'], 404);
        }

        $sale->delete();
        return response()->json(['message' => 'Sale deleted successfully.']);
    }

    // Get sales report
    public function report(Request $request)
    {
        $query = Sale::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            });
        }

        $sales = $query->with('user')->paginate(10);
        return view('sales.report', compact('sales'));
    }

    // Get sales by user
    public function salesByUser(Request $request, $userId)
    {
        $query = Sale::where('user_id', $userId);

         /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            });
        }

        $sales = $query->with('user')->paginate(10);
        return view('sales.by_user', compact('sales'));
    }

    // Get total sales
    public function totalSales(Request $request)
    {
        $query = Sale::query();

         /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            });
        }

        $totalSales = $query->sum('total');
        return response()->json(['total_sales' => $totalSales]);
    }

    // Get sales by date range
    public function salesByDateRange(Request $request)
    {
        $query = Sale::query();

         /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            });
        }

        if ($request->has(['start_date', 'end_date'])) {
            $query->whereBetween('created_at', [$request->start_date, $request->end_date]);
        }

        $sales = $query->with('user')->paginate(10);
        return view('sales.by_date_range', compact('sales'));
    }

    // Get sales summary
    public function salesSummary(Request $request)
    {
        $query = Sale::query();

         /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            });
        }

        $summary = $query->selectRaw('DATE(created_at) as date, SUM(total) as total_sales')
                         ->groupBy('date')
                         ->orderBy('date', 'desc')
                         ->paginate(10);

        return view('sales.summary', compact('summary'));
    }

}