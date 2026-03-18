<!-- app/Http/Controllers/SettingsController.php 
| -- This file is part of the Inventory Management System (IMS) project.
| -- This controller manages CRUD operations for settings in the inventory management system.
-->
<?php
namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    // Display a listing of the settings
    public function index(Request $request)
    {
        $query = Setting::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->where('key', 'like', "%$search%");
        }

        $settings = $query->paginate(10);
        return view('settings.index', compact('settings'));
    }

    /* Store a new setting */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'key' => 'required|string|max:50|unique:settings,key',
            'value' => 'nullable|string',
        ]);

        $setting = Setting::create($validatedData);
        return redirect()->route('settings.index')->with('success', 'Setting created successfully.');
    }

    // Show single setting
    public function show($id)
    {
        $setting = Setting::find($id);
        return response()->json($setting);
    }

    // Update the specified setting in storage
    public function update(Request $request, $id)
    {
        $setting = Setting::find($id);
        if (!$setting) {
            return response()->json(['message' => 'Setting not found'], 404);
        }

        $validatedData = $request->validate([
            'key' => 'required|string|max:50|unique:settings,key,' . $id . ',fieldid',
            'value' => 'nullable|string',
        ]);

        $setting->update($validatedData);
        return redirect()->route('settings.index')->with('success', 'Setting updated successfully.');
    }

    // Delete the specified setting from storage
    public function destroy($id)
    {
        $setting = Setting::find($id);
        if (!$setting) {
            return response()->json(['message' => 'Setting not found'], 404);
        }

        $setting->delete();
        return redirect()->route('settings.index')->with('success', 'Setting deleted successfully.');
    }

    // Get setting by key
    public function getByKey($key)
    {
        $setting = Setting::where('key', $key)->first();
        if (!$setting) {
            return response()->json(['message' => 'Setting not found'], 404);
        }

        return response()->json($setting);
    }

    // Get settings report
    public function report(Request $request)
    {
        $query = Setting::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->where('key', 'like', "%$search%");
        }
        $settings = $query->paginate(10);
        return view('settings.report', compact('settings'));
    }
}





