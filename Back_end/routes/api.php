<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutosController;

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

Route::get('produtos', [ProdutosController::class, 'index']);
Route::post('produtos', [ProdutosController::class, 'store']);
Route::get('produtos/{nome_produto}', [ProdutosController::class, 'show']);
Route::put('produtos/{nome_produto}', [ProdutosController::class, 'update']);
Route::delete('produtos/{nome_produto}', [ProdutosController::class, 'destroy']);