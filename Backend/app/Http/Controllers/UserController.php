<!-- app/Http/Controllers/UserController.php -->
<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Display a listing of the users
    public function index(Request $request)
    {
        $query = $request->input('query');

        /* Search */
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            });
        }

        // Filter by role
        if ($request->has('role')) {
            $query->where('role', $request->role);
        }

        $users = $query->paginate(10);
        return view('users.index', compact('users'));
    }

    /* Store new user */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|string|in:admin,user',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        return response()->json([
            'message' => 'User created successfully.',
            'user' => $user,
        ], 201);
    }

    // Show single user 
    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }

    // Update user
    public function update(Request $request, User $id)
    {
        $user = User::findOrFail($id);
        
        $validated = $request->validate([
            'username' => 'required|string|max:50|unique:users,username,' . $user->id,
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|string|in:admin,user',
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        }

        $user->update($validated);

        return response()->json([
            'message' => 'User updated successfully.',
            'user' => $user,
        ]);
    }

    /* Restore soft deleted user (optional) */
    public function restore($id)
    {
        $user = User::withTrashed()->findOrFail($id);
        $user->restore();

        return  response()->json([
            'message' => 'User restored successfully.',
            'user' => $user,
        ]);
    }

    // Remove the specified user from storage
    public function destroy(User $id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return  response()->json([
            'message' => 'User deleted successfully.',
        ]);
    }
}
