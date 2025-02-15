<?php

namespace App\Http\Middleware;

use Closure;
use HttpException;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Auth403Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     * @throws HttpException
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->check()) {
            return redirect('/');
        }

        return $next($request);
    }
}
