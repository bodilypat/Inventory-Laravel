<!-- app/Http/Middleware/RoleMiddleware.php  
| -- This middleware checks if the authenticated user has the required role 
-->    
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle(Request $request, Closure $next, string $role)
    {
        // Check if the user is authenticated and has the required role
        if (!$request->user() || !$request->user()->hasRole($role)) {
            // For API requests, return a JSON response instead of redirecting
            if ($request->expectsJson()) {
                return response()->json(['message' => 'Forbidden.'], 403);
            }

            // Check if user's role is allowed
            if (!$request->user() || !$request->user()->hasRole($role)) {
                // For API requests, return a JSON response instead of redirecting
                if ($request->expectsJson()) {
                    return response()->json(['message' => 'Forbidden.'], 403);
                }

                // For web requests, redirect to home or show an error page
                return redirect()->route('home')->with('error', 'You do not have permission to access this page.');
            }
        }

        return $next($request);
    }

}

