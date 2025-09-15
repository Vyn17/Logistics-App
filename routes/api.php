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
    Route::post('/auth/register', [\App\Http\Controllers\Api\AuthController::class, 'register']);
    Route::post('/auth/login', [\App\Http\Controllers\Api\AuthController::class, 'login']);
    Route::post('/auth/logout', [\App\Http\Controllers\Api\AuthController::class, 'logout'])->middleware('auth:sanctum');
    Route::post('/auth/refresh', [\App\Http\Controllers\Api\AuthController::class, 'refresh'])->middleware('auth:sanctum');
    
    // Public product and store information
    Route::get('/products', [\App\Http\Controllers\Api\ProductController::class, 'index']);
    Route::get('/products/{product}', [\App\Http\Controllers\Api\ProductController::class, 'show']);
    Route::get('/categories', [\App\Http\Controllers\Api\CategoryController::class, 'index']);
    Route::get('/categories/{category}/products', [\App\Http\Controllers\Api\CategoryController::class, 'products']);
    Route::get('/stores', [\App\Http\Controllers\Api\StoreController::class, 'index']);
    Route::get('/stores/{store}', [\App\Http\Controllers\Api\StoreController::class, 'show']);
    Route::get('/stores/{store}/products', [\App\Http\Controllers\Api\StoreController::class, 'products']);
    
    // Search and filters
    Route::get('/search', [\App\Http\Controllers\Api\SearchController::class, 'index']);
    Route::get('/featured-products', [\App\Http\Controllers\Api\ProductController::class, 'featured']);
    Route::get('/deals', [\App\Http\Controllers\Api\ProductController::class, 'deals']);
    
    // Reviews (public read)
    Route::get('/products/{product}/reviews', [\App\Http\Controllers\Api\ReviewController::class, 'index']);
});

// Protected API routes (require authentication)
Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    
    // Customer routes
    Route::middleware('role:customer')->group(function () {
        // Shopping cart
        Route::get('/cart', [\App\Http\Controllers\Api\CartController::class, 'index']);
        Route::post('/cart', [\App\Http\Controllers\Api\CartController::class, 'store']);
        Route::put('/cart/{item}', [\App\Http\Controllers\Api\CartController::class, 'update']);
        Route::delete('/cart/{item}', [\App\Http\Controllers\Api\CartController::class, 'destroy']);
        Route::delete('/cart', [\App\Http\Controllers\Api\CartController::class, 'clear']);
        
        // Orders management
        Route::get('/orders', [\App\Http\Controllers\Api\OrderController::class, 'index']);
        Route::post('/orders', [\App\Http\Controllers\Api\OrderController::class, 'store']);
        Route::get('/orders/{order}', [\App\Http\Controllers\Api\OrderController::class, 'show']);
        Route::put('/orders/{order}/cancel', [\App\Http\Controllers\Api\OrderController::class, 'cancel']);
        
        // Payments
        Route::post('/orders/{order}/pay', [\App\Http\Controllers\Api\PaymentController::class, 'processPayment']);
        Route::get('/payments', [\App\Http\Controllers\Api\PaymentController::class, 'index']);
        Route::get('/payments/{payment}', [\App\Http\Controllers\Api\PaymentController::class, 'show']);
        
        // Wishlist
        Route::get('/wishlist', [\App\Http\Controllers\Api\WishlistController::class, 'index']);
        Route::post('/wishlist', [\App\Http\Controllers\Api\WishlistController::class, 'store']);
        Route::delete('/wishlist/{product}', [\App\Http\Controllers\Api\WishlistController::class, 'destroy']);
        
        // Reviews
        Route::post('/products/{product}/reviews', [\App\Http\Controllers\Api\ReviewController::class, 'store']);
        Route::put('/reviews/{review}', [\App\Http\Controllers\Api\ReviewController::class, 'update']);
        Route::delete('/reviews/{review}', [\App\Http\Controllers\Api\ReviewController::class, 'destroy']);
        
        // Customer profile
        Route::get('/profile', [\App\Http\Controllers\Api\CustomerController::class, 'profile']);
        Route::put('/profile', [\App\Http\Controllers\Api\CustomerController::class, 'updateProfile']);
        Route::get('/addresses', [\App\Http\Controllers\Api\CustomerController::class, 'addresses']);
        Route::post('/addresses', [\App\Http\Controllers\Api\CustomerController::class, 'storeAddress']);
        Route::put('/addresses/{address}', [\App\Http\Controllers\Api\CustomerController::class, 'updateAddress']);
        Route::delete('/addresses/{address}', [\App\Http\Controllers\Api\CustomerController::class, 'deleteAddress']);
        
        // Order tracking
        Route::get('/orders/{order}/tracking', [\App\Http\Controllers\Api\TrackingController::class, 'show']);
    });
    
    // Seller routes
    Route::middleware('role:seller')->prefix('seller')->group(function () {
        // Seller dashboard
        Route::get('/dashboard', [\App\Http\Controllers\Api\Seller\DashboardController::class, 'index']);
        
        // Product management
        Route::get('/products', [\App\Http\Controllers\Api\Seller\ProductController::class, 'index']);
        Route::post('/products', [\App\Http\Controllers\Api\Seller\ProductController::class, 'store']);
        Route::get('/products/{product}', [\App\Http\Controllers\Api\Seller\ProductController::class, 'show']);
        Route::put('/products/{product}', [\App\Http\Controllers\Api\Seller\ProductController::class, 'update']);
        Route::delete('/products/{product}', [\App\Http\Controllers\Api\Seller\ProductController::class, 'destroy']);
        Route::put('/products/{product}/publish', [\App\Http\Controllers\Api\Seller\ProductController::class, 'publish']);
        Route::put('/products/{product}/unpublish', [\App\Http\Controllers\Api\Seller\ProductController::class, 'unpublish']);
        
        // Inventory management
        Route::get('/inventory', [\App\Http\Controllers\Api\Seller\InventoryController::class, 'index']);
        Route::put('/inventory/{product}', [\App\Http\Controllers\Api\Seller\InventoryController::class, 'update']);
        Route::post('/inventory/{product}/restock', [\App\Http\Controllers\Api\Seller\InventoryController::class, 'restock']);
        
        // Orders received by seller
        Route::get('/orders', [\App\Http\Controllers\Api\Seller\OrderController::class, 'index']);
        Route::get('/orders/{order}', [\App\Http\Controllers\Api\Seller\OrderController::class, 'show']);
        Route::put('/orders/{order}/accept', [\App\Http\Controllers\Api\Seller\OrderController::class, 'accept']);
        Route::put('/orders/{order}/reject', [\App\Http\Controllers\Api\Seller\OrderController::class, 'reject']);
        Route::put('/orders/{order}/process', [\App\Http\Controllers\Api\Seller\OrderController::class, 'process']);
        Route::put('/orders/{order}/ship', [\App\Http\Controllers\Api\Seller\OrderController::class, 'ship']);
        Route::put('/orders/{order}/deliver', [\App\Http\Controllers\Api\Seller\OrderController::class, 'deliver']);
        
        // Store/shop management
        Route::get('/store', [\App\Http\Controllers\Api\Seller\StoreController::class, 'show']);
        Route::put('/store', [\App\Http\Controllers\Api\Seller\StoreController::class, 'update']);
        Route::post('/store/logo', [\App\Http\Controllers\Api\Seller\StoreController::class, 'uploadLogo']);
        Route::post('/store/banner', [\App\Http\Controllers\Api\Seller\StoreController::class, 'uploadBanner']);
        
        // Promotions and discounts
        Route::get('/promotions', [\App\Http\Controllers\Api\Seller\PromotionController::class, 'index']);
        Route::post('/promotions', [\App\Http\Controllers\Api\Seller\PromotionController::class, 'store']);
        Route::put('/promotions/{promotion}', [\App\Http\Controllers\Api\Seller\PromotionController::class, 'update']);
        Route::delete('/promotions/{promotion}', [\App\Http\Controllers\Api\Seller\PromotionController::class, 'destroy']);
        
        // Analytics and reports
        Route::get('/analytics/sales', [\App\Http\Controllers\Api\Seller\AnalyticsController::class, 'sales']);
        Route::get('/analytics/products', [\App\Http\Controllers\Api\Seller\AnalyticsController::class, 'products']);
        Route::get('/analytics/customers', [\App\Http\Controllers\Api\Seller\AnalyticsController::class, 'customers']);
        
        // Seller profile
        Route::get('/profile', [\App\Http\Controllers\Api\Seller\ProfileController::class, 'show']);
        Route::put('/profile', [\App\Http\Controllers\Api\Seller\ProfileController::class, 'update']);
        
        // Financial reports
        Route::get('/reports/earnings', [\App\Http\Controllers\Api\Seller\ReportController::class, 'earnings']);
        Route::get('/reports/orders', [\App\Http\Controllers\Api\Seller\ReportController::class, 'orders']);
        Route::get('/reports/products', [\App\Http\Controllers\Api\Seller\ReportController::class, 'products']);
    });
    
    // Admin routes
    Route::middleware('role:admin')->prefix('admin')->group(function () {
        // Admin dashboard
        Route::get('/dashboard', [\App\Http\Controllers\Api\Admin\DashboardController::class, 'index']);
        
        // User management
        Route::get('/users', [\App\Http\Controllers\Api\Admin\UserController::class, 'index']);
        Route::get('/users/{user}', [\App\Http\Controllers\Api\Admin\UserController::class, 'show']);
        Route::put('/users/{user}', [\App\Http\Controllers\Api\Admin\UserController::class, 'update']);
        Route::delete('/users/{user}', [\App\Http\Controllers\Api\Admin\UserController::class, 'destroy']);
        Route::put('/users/{user}/suspend', [\App\Http\Controllers\Api\Admin\UserController::class, 'suspend']);
        Route::put('/users/{user}/activate', [\App\Http\Controllers\Api\Admin\UserController::class, 'activate']);
        
        // Seller management
        Route::get('/sellers', [\App\Http\Controllers\Api\Admin\SellerController::class, 'index']);
        Route::get('/sellers/{seller}', [\App\Http\Controllers\Api\Admin\SellerController::class, 'show']);
        Route::put('/sellers/{seller}/approve', [\App\Http\Controllers\Api\Admin\SellerController::class, 'approve']);
        Route::put('/sellers/{seller}/reject', [\App\Http\Controllers\Api\Admin\SellerController::class, 'reject']);
        Route::put('/sellers/{seller}/suspend', [\App\Http\Controllers\Api\Admin\SellerController::class, 'suspend']);
        
        // Product management
        Route::get('/products', [\App\Http\Controllers\Api\Admin\ProductController::class, 'index']);
        Route::get('/products/{product}', [\App\Http\Controllers\Api\Admin\ProductController::class, 'show']);
        Route::put('/products/{product}/approve', [\App\Http\Controllers\Api\Admin\ProductController::class, 'approve']);
        Route::put('/products/{product}/reject', [\App\Http\Controllers\Api\Admin\ProductController::class, 'reject']);
        Route::delete('/products/{product}', [\App\Http\Controllers\Api\Admin\ProductController::class, 'destroy']);
        
        // Category management
        Route::get('/categories', [\App\Http\Controllers\Api\Admin\CategoryController::class, 'index']);
        Route::post('/categories', [\App\Http\Controllers\Api\Admin\CategoryController::class, 'store']);
        Route::put('/categories/{category}', [\App\Http\Controllers\Api\Admin\CategoryController::class, 'update']);
        Route::delete('/categories/{category}', [\App\Http\Controllers\Api\Admin\CategoryController::class, 'destroy']);
        
        // Order monitoring
        Route::get('/orders', [\App\Http\Controllers\Api\Admin\OrderController::class, 'index']);
        Route::get('/orders/{order}', [\App\Http\Controllers\Api\Admin\OrderController::class, 'show']);
        Route::put('/orders/{order}/resolve', [\App\Http\Controllers\Api\Admin\OrderController::class, 'resolve']);
        
        // System reports
        Route::get('/reports/overview', [\App\Http\Controllers\Api\Admin\ReportController::class, 'overview']);
        Route::get('/reports/revenue', [\App\Http\Controllers\Api\Admin\ReportController::class, 'revenue']);
        Route::get('/reports/sales', [\App\Http\Controllers\Api\Admin\ReportController::class, 'sales']);
        Route::get('/reports/sellers', [\App\Http\Controllers\Api\Admin\ReportController::class, 'sellers']);
        Route::get('/reports/products', [\App\Http\Controllers\Api\Admin\ReportController::class, 'products']);
        
        // System settings
        Route::get('/settings', [\App\Http\Controllers\Api\Admin\SettingController::class, 'index']);
        Route::put('/settings', [\App\Http\Controllers\Api\Admin\SettingController::class, 'update']);
        
        // Banner and promotion management
        Route::get('/banners', [\App\Http\Controllers\Api\Admin\BannerController::class, 'index']);
        Route::post('/banners', [\App\Http\Controllers\Api\Admin\BannerController::class, 'store']);
        Route::put('/banners/{banner}', [\App\Http\Controllers\Api\Admin\BannerController::class, 'update']);
        Route::delete('/banners/{banner}', [\App\Http\Controllers\Api\Admin\BannerController::class, 'destroy']);
    });
});

// Webhook routes (for payment gateways, etc.)
Route::prefix('webhooks')->group(function () {
    Route::post('/midtrans', [\App\Http\Controllers\Api\WebhookController::class, 'midtrans']);
    Route::post('/xendit', [\App\Http\Controllers\Api\WebhookController::class, 'xendit']);
    Route::post('/gopay', [\App\Http\Controllers\Api\WebhookController::class, 'gopay']);
    Route::post('/ovo', [\App\Http\Controllers\Api\WebhookController::class, 'ovo']);
});
