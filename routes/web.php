<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Landing page and public routes
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/how-it-works', function () {
    return Inertia::render('HowItWorks');
})->name('how-it-works');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/tracking', function () {
    return Inertia::render('Tracking');
})->name('tracking');

Route::get('/faq', function () {
    return Inertia::render('FAQ');
})->name('faq');

Route::get('/terms', function () {
    return Inertia::render('Terms');
})->name('terms');

Route::get('/privacy', function () {
    return Inertia::render('Privacy');
})->name('privacy');

// Protected routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    // Customer routes
    Route::middleware('role:customer')->prefix('customer')->group(function () {
        Route::get('/orders', function () {
            return Inertia::render('Customer/Orders');
        })->name('customer.orders');
        
        Route::get('/orders/create', function () {
            return Inertia::render('Customer/CreateOrder');
        })->name('customer.orders.create');
        
        Route::get('/orders/{order}', function () {
            return Inertia::render('Customer/OrderDetails');
        })->name('customer.orders.show');
        
        Route::get('/profile', function () {
            return Inertia::render('Customer/Profile');
        })->name('customer.profile');
        
        Route::get('/addresses', function () {
            return Inertia::render('Customer/Addresses');
        })->name('customer.addresses');
        
        Route::get('/payments', function () {
            return Inertia::render('Customer/Payments');
        })->name('customer.payments');
    });
    
    // Vendor routes
    Route::middleware('role:vendor')->prefix('vendor')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Vendor/Dashboard');
        })->name('vendor.dashboard');
        
        Route::get('/orders', function () {
            return Inertia::render('Vendor/Orders');
        })->name('vendor.orders');
        
        Route::get('/orders/{order}', function () {
            return Inertia::render('Vendor/OrderDetails');
        })->name('vendor.orders.show');
        
        Route::get('/services', function () {
            return Inertia::render('Vendor/Services');
        })->name('vendor.services');
        
        Route::get('/pricing', function () {
            return Inertia::render('Vendor/Pricing');
        })->name('vendor.pricing');
        
        Route::get('/fleet', function () {
            return Inertia::render('Vendor/Fleet');
        })->name('vendor.fleet');
        
        Route::get('/profile', function () {
            return Inertia::render('Vendor/Profile');
        })->name('vendor.profile');
        
        Route::get('/reports', function () {
            return Inertia::render('Vendor/Reports');
        })->name('vendor.reports');
    });
    
    // Admin routes
    Route::middleware('role:admin')->prefix('admin')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('admin.dashboard');
        
        Route::get('/users', function () {
            return Inertia::render('Admin/Users');
        })->name('admin.users');
        
        Route::get('/vendors', function () {
            return Inertia::render('Admin/Vendors');
        })->name('admin.vendors');
        
        Route::get('/orders', function () {
            return Inertia::render('Admin/Orders');
        })->name('admin.orders');
        
        Route::get('/reports', function () {
            return Inertia::render('Admin/Reports');
        })->name('admin.reports');
        
        Route::get('/settings', function () {
            return Inertia::render('Admin/Settings');
        })->name('admin.settings');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
