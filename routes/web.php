<?php
use App\Http\Controllers\GetController;
use App\Http\Controllers\PlayController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('profile.index');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/writing', [PlayController::class, 'writing']);
Route::get('/reading1', [PlayController::class, 'reading1']);
Route::get('/reading', [PlayController::class, 'reading']);
Route::get('/how', [GetController::class, 'how']);
Route::get('/login', [GetController::class, 'login']);
Route::get('/score', [GetController::class, 'score']);
Route::get('/readingquestion', [PlayController::class, 'readingquestion']);

require __DIR__.'/auth.php';
