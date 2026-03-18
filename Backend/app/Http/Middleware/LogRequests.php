<!-- app/Http/Middleware/LogRequests.php -->  

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogRequests
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Prepare log data 
        $logData = [
            'user_id' => optional($request->user())->id,
            'username' => optional($request->user())->username,
            'url' => $request->fullUrl(),
            'ip' => $request->ip(),
            'playload' => $request->all(),
            'user_agent' => $request->header('User-Agent'),
            ];
            // write to defaukt log 
        Log::info('Incoming Request', $logData);
        return $next($request);
    }
}

