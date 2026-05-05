<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

// API Routes
Route::get('index', [UserController::class, 'index'])->name('index');