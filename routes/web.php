<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\People;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//Star WArs API Connections
Route::get('getPeople', "App\Http\Controllers\People@getPeople");


Route::get('getPlanets', "App\Http\Controllers\Planets@getPlanets");

Route::get('getStarships', "App\Http\Controllers\Starships@getStarships");

