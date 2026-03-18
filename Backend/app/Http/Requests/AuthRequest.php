<!-- app/Http/Requests/AuthRequest.php -->

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true; // Allow all requests, authentication is handled by middleware
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        // Determine route and apply appropriate rules 
        $routeName = $this->route()->getName();

        if ($routeName === 'auth.register') {
            return [
                'username' => 'required|string|max:255|unique:users',
                'email' => 'required|email',
                'password' => 'required|string|min:6',
                'role' => 'required|in:admin,user',
            ];
        }

        if ($routeName === 'auth.login') {
            return [
                'username' => 'required|string',
                'password' => 'required|string',
            ];
        }

        // Default rules (if needed)
        return [];
    }

    /* Customize the validation messages */
    public function messages(): array
    {
        return [
            'username.required' => 'Username is required.',
            'username.string' => 'Username must be a string.',
            'username.max' => 'Username cannot exceed 255 characters.',
            'username.unique' => 'Username is already taken.',
            'email.required' => 'Email is required.',
            'email.email' => 'Email must be a valid email address.',
            'password.required' => 'Password is required.',
            'password.string' => 'Password must be a string.',
            'password.min' => 'Password must be at least 6 characters.',
            'role.required' => 'Role is required.',
            'role.in' => 'Role must be either admin or user.',
        ];
    }
}

