<!-- 
    CategoryController.php
    This controller manages CRUD operations for categories in the inventory management system.
    It includes methods for listing, creating, showing, updating, and deleting categories.
-->

<?php
namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
class CategoryController extends Controller
{
    // Display a listing of the categories
    public function index(Request $request)
    {
        $query = Category::query();

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->where('name', 'like', "%$search%");
        }

        $categories = $query->paginate(10);
        return view('categories.index', compact('categories'));
    }

    /* Store a new category */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:100|unique:categories,name',
            'description' => 'nullable|string'
        ]);

        $category = Category::create($validatedData);
        return redirect()->route('categories.index')->with('success', 'Category created successfully.');
    }

    // Show single category
    public function show($id)
    {
        $category = Category::find($id);
        return response()->json($category);
    }

    // Update the specified category in storage
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:100|unique:categories,name,' . $category->id,
            'description' => 'nullable|string'
        ]);

        $category->update($validatedData);
        return response()->json($category);
    }

    // Remove the specified category from storage
    public function destroy($id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $category->delete();
        return response()->json(['message' => 'Category deleted successfully']);
    }

}   
