<?php

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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


/*
|--------------------------------------------------------------------------
| User
|--------------------------------------------------------------------------
*/

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/profile', 'Profile\ProfileController@index')->name('profile');


/*
|--------------------------------------------------------------------------
| E-COMMERCE
|--------------------------------------------------------------------------
*/

if(env('APP_WEBTYPE') == 'ECOMMERCE'){
    Route::group(['prefix' => '/ecommerce'], function () {
    
        //Proccesors
        Route::get('/proccesors', 'Ecommerce\ProccesorsController@index')->name('ecommerce.proccesors.index');
        
        //Orders
        Route::get('/orders', 'Ecommerce\OrdersController@index')->name('marketing.orders.index');
        
        //Products
        Route::get('/products', 'Ecommerce\ProductsController@index')->name('marketing.products.index');
    });
}

/*
|--------------------------------------------------------------------------
| Marketing
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => '/marketing'], function () {

    //Newsletter
    Route::get('/newsletter', 'Marketing\NewsletterController@index')->name('marketing.newsletter.index');
    
    //Leads
    Route::get('/leads', 'Marketing\LeadsController@index')->name('marketing.leads.index');
    Route::get('/leads/list', 'Marketing\LeadsController@getLeads')->name('marketing.leads.list');
    
    //Pixels
    Route::get('/pixels', 'Marketing\PixelsController@index')->name('marketing.pixels.index');
});

/*
|--------------------------------------------------------------------------
| General Settings
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => '/settings'], function () {

    //Users
    Route::get('/users', 'Settings\UsersController@index')->name('settings.users.index');
    
});