<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Middleware\Auth403Middleware;
use App\Models\Post;

/*
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

*/

// route for posts
Route::get('posts', [PostController::class, 'index'])->name('posts.index');
Route::get('posts/create', [PostController::class, 'create'])->name('posts.create')->middleware(Auth403Middleware::class);
Route::post('posts', [PostController::class, 'store'])->name('posts.store')->middleware(Auth403Middleware::class);
Route::get('posts/{post}', [PostController::class, 'show'])->name('posts.show');
Route::get('posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit')->middleware(Auth403Middleware::class);
Route::put('posts/{post}', [PostController::class, 'update'])->name('posts.update')->middleware(Auth403Middleware::class);
Route::delete('posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy')->middleware(Auth403Middleware::class);

// route for comments
// Route::resource('comments', CommentController::class);


Route::get("/", function () {
    //$items = Post::all()->take(3);
    //return Inertia::render("About", ["posts" => $items]);
    return Inertia::render("About", ["posts" => []]);
})->name("home");


require __DIR__.'/auth.php';
