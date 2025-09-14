<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Public API routes (no auth required)
Route::prefix('v1')->group(function () {
    // Authentication routes
    Route::post('/auth/register', [App\Http\Controllers\Api\AuthController::class, 'register']);
    Route::post('/auth/login', [App\Http\Controllers\Api\AuthController::class, 'login']);
    Route::post('/auth/logout', [App\Http\Controllers\Api\AuthController::class, 'logout'])->middleware('auth:sanctum');
    Route::post('/auth/refresh', [App\Http\Controllers\Api\AuthController::class, 'refresh'])->middleware('auth:sanctum');
    
    // Public vendor and service information
    Route::get('/vendors', [App\Http\Controllers\Api\VendorController::class, 'index']);
    Route::get('/vendors/{vendor}', [App\Http\Controllers\Api\VendorController::class, 'show']);
    Route::get('/services', [App\Http\Controllers\Api\ServiceController::class, 'index']);
    Route::get('/services/{service}', [App\Http\Controllers\Api\ServiceController::class, 'show']);
    
    // Price calculation (public for quote purposes)
    Route::post('/calculate-shipping', [App\Http\Controllers\Api\ShippingCalculatorController::class, 'calculate']);
    
    // Tracking (public with tracking number)
    Route::get('/track/{trackingNumber}', [App\Http\Controllers\Api\TrackingController::class, 'track']);
});

// Protected API routes (require authentication)
Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    
    // Customer routes
    Route::middleware('role:customer')->group(function () {
        // Orders management
        Route::get('/orders', [App\Http\Controllers\Api\OrderController::class, 'index']);
        Route::post('/orders', [App\Http\Controllers\Api\OrderController::class, 'store']);
        Route::get('/orders/{order}', [App\Http\Controllers\Api\OrderController::class, 'show']);
        Route::put('/orders/{order}', [App\Http\Controllers\Api\OrderController::class, 'update']);
        Route::delete('/orders/{order}', [App\Http\Controllers\Api\OrderController::class, 'destroy']);
        
        // Payments
        Route::post('/orders/{order}/pay', [App\Http\Controllers\Api\PaymentController::class, 'processPayment']);
        Route::get('/payments', [App\Http\Controllers\Api\PaymentController::class, 'index']);
        Route::get('/payments/{payment}', [App\Http\Controllers\Api\PaymentController::class, 'show']);
        
        // Customer profile
        Route::get('/profile', [App\Http\Controllers\Api\CustomerController::class, 'profile']);
        Route::put('/profile', [App\Http\Controllers\Api\CustomerController::class, 'updateProfile']);
        Route::get('/addresses', [App\Http\Controllers\Api\CustomerController::class, 'addresses']);
        Route::post('/addresses', [App\Http\Controllers\Api\CustomerController::class, 'storeAddress']);
        Route::put('/addresses/{address}', [App\Http\Controllers\Api\CustomerController::class, 'updateAddress']);
        Route::delete('/addresses/{address}', [App\Http\Controllers\Api\CustomerController::class, 'deleteAddress']);
    });
    
    // Vendor routes
    Route::middleware('role:vendor')->prefix('vendor')->group(function () {
        // Vendor dashboard
        Route::get('/dashboard', [App\Http\Controllers\Api\Vendor\DashboardController::class, 'index']);
        
        // Orders received by vendor
        Route::get('/orders', [App\Http\Controllers\Api\Vendor\OrderController::class, 'index']);
        Route::get('/orders/{order}', [App\Http\Controllers\Api\Vendor\OrderController::class, 'show']);
        Route::put('/orders/{order}/accept', [App\Http\Controllers\Api\Vendor\OrderController::class, 'accept']);
        Route::put('/orders/{order}/reject', [App\Http\Controllers\Api\Vendor\OrderController::class, 'reject']);
        Route::put('/orders/{order}/pickup', [App\Http\Controllers\Api\Vendor\OrderController::class, 'pickup']);
        Route::put('/orders/{order}/in-transit', [App\Http\Controllers\Api\Vendor\OrderController::class, 'inTransit']);
        Route::put('/orders/{order}/delivered', [App\Http\Controllers\Api\Vendor\OrderController::class, 'delivered']);
        
        // Services management
        Route::get('/services', [App\Http\Controllers\Api\Vendor\ServiceController::class, 'index']);
        Route::post('/services', [App\Http\Controllers\Api\Vendor\ServiceController::class, 'store']);
        Route::get('/services/{service}', [App\Http\Controllers\Api\Vendor\ServiceController::class, 'show']);
        Route::put('/services/{service}', [App\Http\Controllers\Api\Vendor\ServiceController::class, 'update']);
        Route::delete('/services/{service}', [App\Http\Controllers\Api\Vendor\ServiceController::class, 'destroy']);
        
        // Pricing and routes
        Route::get('/pricing', [App\Http\Controllers\Api\Vendor\PricingController::class, 'index']);
        Route::post('/pricing', [App\Http\Controllers\Api\Vendor\PricingController::class, 'store']);
        Route::put('/pricing/{pricing}', [App\Http\Controllers\Api\Vendor\PricingController::class, 'update']);
        Route::delete('/pricing/{pricing}', [App\Http\Controllers\Api\Vendor\PricingController::class, 'destroy']);
        
        // Fleet management (optional)
        Route::get('/fleet', [App\Http\Controllers\Api\Vendor\FleetController::class, 'index']);
        Route::post('/fleet', [App\Http\Controllers\Api\Vendor\FleetController::class, 'store']);
        Route::put('/fleet/{vehicle}', [App\Http\Controllers\Api\Vendor\FleetController::class, 'update']);
        Route::delete('/fleet/{vehicle}', [App\Http\Controllers\Api\Vendor\FleetController::class, 'destroy']);
        
        // Vendor profile
        Route::get('/profile', [App\Http\Controllers\Api\Vendor\ProfileController::class, 'show']);
        Route::put('/profile', [App\Http\Controllers\Api\Vendor\ProfileController::class, 'update']);
        
        // Financial reports
        Route::get('/reports/earnings', [App\Http\Controllers\Api\Vendor\ReportController::class, 'earnings']);
        Route::get('/reports/orders', [App\Http\Controllers\Api\Vendor\ReportController::class, 'orders']);
    });
    
    // Admin routes
    Route::middleware('role:admin')->prefix('admin')->group(function () {
        // Admin dashboard
        Route::get('/dashboard', [App\Http\Controllers\Api\Admin\DashboardController::class, 'index']);
        
        // User management
        Route::get('/users', [App\Http\Controllers\Api\Admin\UserController::class, 'index']);
        Route::get('/users/{user}', [App\Http\Controllers\Api\Admin\UserController::class, 'show']);
        Route::put('/users/{user}', [App\Http\Controllers\Api\Admin\UserController::class, 'update']);
        Route::delete('/users/{user}', [App\Http\Controllers\Api\Admin\UserController::class, 'destroy']);
        Route::put('/users/{user}/suspend', [App\Http\Controllers\Api\Admin\UserController::class, 'suspend']);
        Route::put('/users/{user}/activate', [App\Http\Controllers\Api\Admin\UserController::class, 'activate']);
        
        // Vendor management
        Route::get('/vendors', [App\Http\Controllers\Api\Admin\VendorController::class, 'index']);
        Route::get('/vendors/{vendor}', [App\Http\Controllers\Api\Admin\VendorController::class, 'show']);
        Route::put('/vendors/{vendor}/approve', [App\Http\Controllers\Api\Admin\VendorController::class, 'approve']);
        Route::put('/vendors/{vendor}/reject', [App\Http\Controllers\Api\Admin\VendorController::class, 'reject']);
        Route::put('/vendors/{vendor}/suspend', [App\Http\Controllers\Api\Admin\VendorController::class, 'suspend']);
        
        // Order monitoring
        Route::get('/orders', [App\Http\Controllers\Api\Admin\OrderController::class, 'index']);
        Route::get('/orders/{order}', [App\Http\Controllers\Api\Admin\OrderController::class, 'show']);
        Route::put('/orders/{order}/resolve', [App\Http\Controllers\Api\Admin\OrderController::class, 'resolve']);
        
        // System reports
        Route::get('/reports/overview', [App\Http\Controllers\Api\Admin\ReportController::class, 'overview']);
        Route::get('/reports/revenue', [App\Http\Controllers\Api\Admin\ReportController::class, 'revenue']);
        Route::get('/reports/performance', [App\Http\Controllers\Api\Admin\ReportController::class, 'performance']);
        Route::get('/reports/vendors', [App\Http\Controllers\Api\Admin\ReportController::class, 'vendors']);
        
        // System settings
        Route::get('/settings', [App\Http\Controllers\Api\Admin\SettingController::class, 'index']);
        Route::put('/settings', [App\Http\Controllers\Api\Admin\SettingController::class, 'update']);
    });
});

// Webhook routes (for payment gateways, etc.)
Route::prefix('webhooks')->group(function () {
    Route::post('/midtrans', [App\Http\Controllers\Api\WebhookController::class, 'midtrans']);
    Route::post('/xendit', [App\Http\Controllers\Api\WebhookController::class, 'xendit']);
});
