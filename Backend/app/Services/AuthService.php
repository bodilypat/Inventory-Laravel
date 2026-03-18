<!-- app/Services/AuthService.php 
 | -- This service handles authentication-related logic.
 | -- It provides methods for user login, registration, and token management.
 -->
<?php
namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthService extends BaseService
{
    /* Handle user login */
    public function login($credentials)
    {
        try {
            if (Auth::attempt($credentials)) {
                $user = Auth::user();
                $token = $user->createToken('auth_token')->plainTextToken;
                return ['user' => $user, 'token' => $token];
            } else {
                throw new \Exception('Invalid credentials');
            }
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Handle user registration */
    public function register($data)
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

    /* Handle user logout */
    public function logout()
    {
        try {
            Auth::user()->tokens()->delete();
            return true;
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }
}
