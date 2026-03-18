<!-- app/Services/UserService.php 
 | -- This service handles user-related logic.
 | -- It provides methods for retrieving, updating, and deleting user information.
 -->
<?php
namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService extends BaseService
{
    /* Retrieve user information */
    public function getUser($id)
    {
        try {
            return User::findOrFail($id);
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Create a new user */
    public function createUser($data)
    {
        try {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);
            return $user;
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }
    
    /* Update user information */
    public function updateUser($id, $data)
    {
        try {
            $user = User::findOrFail($id);
            if (isset($data['password'])) {
                $data['password'] = Hash::make($data['password']);
            }
            $user->update($data);
            return $user;
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Delete a user */
    public function deleteUser($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();
            return true;
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }
}
