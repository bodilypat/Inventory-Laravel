<!-- routes/api.php 
| -- API routes for the application. 
-->
<?php

use Illuminate\Support\Facades\Route;

/* API ROUTES */

# AUTH ROUTES (Public)
Route::group(['prefix' => 'auth'], function () {
    Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register'])
        ->name('auth.register');

    Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login'])
        ->name('auth.login');
});

# PROTECTED ROUTES (Require Authentication)
Route::group(['middleware' => 'auth:sanctum'], function () {
    # AUTH ROUTES
    Route::post('/auth/logout', [\App\Http\Controllers\AuthController::class, 'logout'])
        ->name('auth.logout');

    # USER ROUTES
    Route::get('/user/profile', [\App\Http\Controllers\UserController::class, 'profile'])
        ->name('user.profile');
});

# USER ROUTES (Admin Only)
Route::group(['middleware' => ['auth:sanctum', 'admin']], function () {
    Route::get('/users', [\App\Http\Controllers\UserController::class, 'index'])
        ->name('users.index');
    Route::get('/users/{id}', [\App\Http\Controllers\UserController::class, 'show'])
        ->name('users.show');
    Route::put('/users/{id}', [\App\Http\Controllers\UserController::class, 'update'])
        ->name('users.update');
    Route::delete('/users/{id}', [\App\Http\Controllers\UserController::class, 'destroy'])
        ->name('users.destroy');
});

# CATEGORIES ROUTES
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/categories', [\App\Http\Controllers\CategoryController::class, 'index'])
        ->name('categories.index');
    Route::post('/categories', [\App\Http\Controllers\CategoryController::class, 'store'])
        ->name('categories.store');
    Route::get('/categories/{id}', [\App\Http\Controllers\CategoryController::class, 'show'])
        ->name('categories.show');
    Route::put('/categories/{id}', [\App\Http\Controllers\CategoryController::class, 'update'])
        ->name('categories.update');
    Route::delete('/categories/{id}', [\App\Http\Controllers\CategoryController::class, 'destroy'])
        ->name('categories.destroy');
});

# PRODUCTS ROUTES
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/products', [\App\Http\Controllers\ProductController::class, 'index'])
        ->name('products.index');
    Route::post('/products', [\App\Http\Controllers\ProductController::class, 'store'])
        ->name('products.store');
    Route::get('/products/{id}', [\App\Http\Controllers\ProductController::class, 'show'])
        ->name('products.show');
    Route::put('/products/{id}', [\App\Http\Controllers\ProductController::class, 'update'])
        ->name('products.update');
    Route::delete('/products/{id}', [\App\Http\Controllers\ProductController::class, 'destroy'])
        ->name('products.destroy');
});

# ORDERS ROUTES
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/orders', [\App\Http\Controllers\OrderController::class, 'index'])
        ->name('orders.index');
    Route::post('/orders', [\App\Http\Controllers\OrderController::class, 'store'])
        ->name('orders.store');
    Route::get('/orders/{id}', [\App\Http\Controllers\OrderController::class, 'show'])
        ->name('orders.show');
    Route::put('/orders/{id}', [\App\Http\Controllers\OrderController::class, 'update'])
        ->name('orders.update');
    Route::delete('/orders/{id}', [\App\Http\Controllers\OrderController::class, 'destroy'])
        ->name('orders.destroy');
});

# PURCHASES ROUTES  
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/purchases', [\App\Http\Controllers\PurchaseController::class, 'index'])
        ->name('purchases.index');
    Route::post('/purchases', [\App\Http\Controllers\PurchaseController::class, 'store'])
        ->name('purchases.store');
    Route::get('/purchases/{id}', [\App\Http\Controllers\PurchaseController::class, 'show'])
        ->name('purchases.show');
    Route::put('/purchases/{id}', [\App\Http\Controllers\PurchaseController::class, 'update'])
        ->name('purchases.update');
    Route::delete('/purchases/{id}', [\App\Http\Controllers\PurchaseController::class, 'destroy'])
        ->name('purchases.destroy');
});

# SUPPLIERS ROUTES
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/suppliers', [\App\Http\Controllers\SupplierController::class, 'index'])
        ->name('suppliers.index');
    Route::post('/suppliers', [\App\Http\Controllers\SupplierController::class, 'store'])
        ->name('suppliers.store');
    Route::get('/suppliers/{id}', [\App\Http\Controllers\SupplierController::class, 'show'])
        ->name('suppliers.show');
    Route::put('/suppliers/{id}', [\App\Http\Controllers\SupplierController::class, 'update'])
        ->name('suppliers.update');
    Route::delete('/suppliers/{id}', [\App\Http\Controllers\SupplierController::class, 'destroy'])
        ->name('suppliers.destroy');
});

# STOCK MOVEMENTS ROUTES
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/stock-movements', [\App\Http\Controllers\StockMovementController::class, 'index'])
        ->name('stock-movements.index');
    Route::post('/stock-movements', [\App\Http\Controllers\StockMovementController::class, 'store'])
        ->name('stock-movements.store');
    Route::get('/stock-movements/{id}', [\App\Http\Controllers\StockMovementController::class, 'show'])
        ->name('stock-movements.show');
    Route::put('/stock-movements/{id}', [\App\Http\Controllers\StockMovementController::class, 'update'])
        ->name('stock-movements.update');
    Route::delete('/stock-movements/{id}', [\App\Http\Controllers\StockMovementController::class, 'destroy'])
        ->name('stock-movements.destroy');
});

# LOGS ROUTES
Route::group(['middleware' => ['auth:sanctum', 'admin']], function () {
    Route::get('/logs', [\App\Http\Controllers\LogController::class, 'index'])
        ->name('logs.index');
    Route::get('/logs/{id}', [\App\Http\Controllers\LogController::class, 'show'])
        ->name('logs.show');
    Route::delete('/logs/{id}', [\App\Http\Controllers\LogController::class, 'destroy'])
        ->name('logs.destroy');
});

# SETTINGS ROUTES
Route::group(['middleware' => ['auth:sanctum', 'admin']], function () {
    Route::get('/settings', [\App\Http\Controllers\SettingController::class, 'index'])
        ->name('settings.index');
    Route::put('/settings', [\App\Http\Controllers\SettingController::class, 'update'])
        ->name('settings.update');
});

