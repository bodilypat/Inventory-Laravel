<!-- app/Services/BaseService.php 
 | -- This is the base service class for all services in the application.
 | -- It provides common functionality and methods that can be inherited by other services.
 -->
<?php
namespace App\Services;

abstract class BaseService
{
    /* Handle exceptions consistently */
    protected function handleException(\Throwable $e)
    {
        // Log error
        \Log::error($e->getMessage(), ['trace' => $e->getTraceAsString()]);

        // Throw a general exception for controller to catch 
        throw new \Exception('An error occurred while processing your request. Please try again later.');
    }
}
