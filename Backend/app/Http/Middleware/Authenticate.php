<!-- app/Http/Middleware/Authenticate.php -->

<?php
namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use RecursiveArrayIterator;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo(Request $request): ?string
    {
        // for API, we don't want to redirect, just return null
       if (!$request->expectsJson()) {
            return route('login');
        }

        return null;
    }

    /* Handle unauthenticated user (override default behavior) */
    protected function unauthenticated($request, array $guards)
    {
        // For API requests, return a JSON response instead of redirecting
        if ($request->expectsJson()) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        // For web requests, use the default behavior (redirect to login)
        parent::unauthenticated($request, $guards);
    }

    
}