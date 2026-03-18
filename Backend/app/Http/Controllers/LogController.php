<!-- app/Http/Controllers/LogController.php
 | -- This file is part of the Inventory Management System (IMS) project.
 | -- This controller manages CRUD operations for logs in the inventory management system.
-->
<?php
namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;

class LogController extends Controller
{
    // Display a listing of the logs
    public function index(Request $request)
    {
        $query = Log::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            })->orWhere('action', 'like', "%$search%")
              ->orWhere('description', 'like', "%$search%");
        }

        $logs = $query->paginate(10);
        return view('logs.index', compact('logs'));
    }

    /* Store a new log entry */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'nullable|exists:users,user_id',
            'action' => 'required|string|max:50',
            'description' => 'nullable|string',
        ]);

        $log = Log::create($validatedData);
        return redirect()->route('logs.index')->with('success', 'Log entry created successfully.');
    }

    // Show single log entry
    public function show($id)
    {
        $log = Log::find($id);
        return response()->json($log);
    }

    // Update the specified log entry in storage
    public function update(Request $request, $id)
    {
        $log = Log::find($id);
        if (!$log) {
            return response()->json(['message' => 'Log entry not found'], 404);
        }

        $validatedData = $request->validate([
            'user_id' => 'nullable|exists:users,user_id',
            'action' => 'required|string|max:50',
            'description' => 'nullable|string',
        ]);

        $log->update($validatedData);
        return redirect()->route('logs.index')->with('success', 'Log entry updated successfully.');
    }

    // Remove the specified log entry from storage
    public function destroy($id)
    {
        $log = Log::find($id);
        if (!$log) {
            return response()->json(['message' => 'Log entry not found'], 404);
        }

        $log->delete();
        return redirect()->route('logs.index')->with('success', 'Log entry deleted successfully.');
    }

    // Get logs by user
    public function getByUser($user_id)
    {
        $logs = Log::where('user_id', $user_id)->get();
        return response()->json($logs);
    }

    // Get logs report
    public function report(Request $request)
    {
        $query = Log::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            })->orWhere('action', 'like', "%$search%")
              ->orWhere('description', 'like', "%$search%");
        }

        $logs = $query->get();
        return response()->json($logs);
    }
}

