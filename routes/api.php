<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:api')->group(function () {

    Route::get('sales/report/daily', 'API\ReportController@daily');
    Route::get('sales/report/monthly', 'API\ReportController@monthly');
    Route::post('stocks/bulk', 'API\PurchaseController@bulk');
    Route::get('stocks/find-by/{field}/{value}', 'API\PurchaseController@findBy');

    // Route::apiResource('stocks', 'API\PurchaseController');
    Route::apiResource('customers', 'API\CustomerController');
    // Route::apiResource('purchases', 'API\PurchaseController');
    Route::apiResource('categories', 'API\CategoriesController');
    Route::apiResource('models', 'API\ModelsController');
    Route::apiResource('brands', 'API\BrandsController');
    Route::apiResource('colors', 'API\ColorsController');
    Route::apiResource('suppliers', 'API\SuppliersController');
    Route::apiResource('sales', 'API\SalesController');
    Route::apiResource('stocks', 'API\PurchaseController');
    Route::apiResource('freebies', 'API\FreebiesController');

    // Route::get('/stocks/lists', 'API\ItemController@lists');
    // Route::get('/sites/lists', 'API\SiteController@lists');
    // Route::get('/units/lists', 'API\UnitController@lists');
    // Route::get('/customers/search', 'API\CustomerController@search');

    // Route::apiResource('stocks', 'API\ItemController');
    // Route::apiResource('sales', 'API\SalesController');
    // Route::apiResource('units', 'API\UnitController');
    // Route::apiResource('sites', 'API\SiteController');
    Route::apiResource('users', 'API\UserController');
});
