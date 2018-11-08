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

Route::group(['namespace' => 'Backend', 'prefix' => 'backend', 'as' => 'backend.', 'middleware' => ['auth', 'adminAccessOnly']], function () {
    Route::get('/', 'DashBoardController@index')->name('index');
    Route::get('/home', 'DashBoardController@home')->name('home');
    Route::get('activation', 'DashBoardController@toggleActivate')->name('activate');
    Route::resource('product', 'ProductController');
    Route::resource('product/attribute', 'ProductAttributeController');
    Route::get('trashed', 'ProductController@trashed')->name('product.trashed');
    Route::get('restore/{id}', 'ProductController@restore')->name('product.restore');
    Route::resource('gallery', 'GalleryController');
    Route::resource('image', 'ImageController');
    Route::resource('category', 'CategoryController');
    Route::resource('page', 'PageController');
    Route::resource('user', 'UserController');
    Route::resource('order', 'OrderController');
    Route::resource('currency', 'CurrencyController');
    Route::resource('coupon', 'CouponController');
    Route::resource('setting', 'SettingController');
    Route::resource('country', 'CountryController');
    Route::resource('tag', 'TagController');
    Route::resource('brand', 'BrandController');
    Route::resource('slider', 'SliderController');
    Route::resource('color', 'ColorController');
    Route::resource('size', 'SizeController');
    Route::resource('term', 'TermController');
    Route::resource('policy', 'PolicyController');
    Route::resource('faq', 'FaqController');
    Route::resource('aboutus', 'AboutusController');
    Route::resource('notification', 'NotificationController');
    Route::resource('branch', 'BranchController');
    Route::resource('package', 'ShipmentPackageController');
    Route::get('reset/password', 'UserController@getResetPassword')->name('reset.password');
    Route::post('reset/password', 'UserController@postResetPassword')->name('reset');
    Route::get('backup/db', ['as' => 'backup.db', 'uses' => 'DashBoardController@BackupDB']);
    Route::get('export/translations', 'DashBoardController@exportTranslations')->name('export.translation');
});

Route::group(['namespace' => 'Frontend', 'as' => 'frontend.', 'middleware' => []], function () {
    Route::get('/', 'HomeController@index')->name('index');
    Route::get('/home', 'HomeController@index')->name('home');
    Route::resource('product', 'ProductController');
    Route::resource('cart', 'CartController')->only(['index']);
    Route::post('cart/add', 'CartController@addItem')->name('cart.add');
    Route::get('cart/remove/{id}', 'CartController@removeItem')->name('cart.remove');
    Route::get('cart/clear', 'CartController@clearCart')->name('cart.clear');
    Route::post('cart/coupon', 'CartController@applyCoupon')->name('cart.coupon');
    Route::post('cart/checkout', 'CartController@checkout')->name('cart.checkout');
    Route::post('cart/store', 'CartController@checkout')->name('cart.store');
    // checkout.review is order.show
    Route::resource('order', 'OrderController');
    Route::resource('category', 'CategoryController');
    Route::resource('page', 'PageController')->only(['show']);
    Route::resource('user', 'UserController');
    Route::resource('newsletter', 'NewsletterController');
    Route::get('search', 'ProductController@search')->name('product.search');
    Route::get('currency/{currency}', 'HomeController@changeCurrency')->name('currency.change');
    Route::get('language/{locale}', 'HomeController@changeLanguage')->name('language.change');
});
Route::group(['namespace' => 'Frontend', 'as' => 'frontend.', 'middleware' => ['auth']], function () {

    Route::get('favorite', 'FavoriteController@index')->name('favorite.index');
    Route::get('favorite/add/{id}', 'FavoriteController@add')->name('favorite.add');
    Route::get('favorite/remove/{id}', 'FavoriteController@remove')->name('favorite.remove');
});
Route::get('/', 'Frontend\HomeController@index')->name('home');
Auth::routes();
//if (app()->environment('production') && Schema::hasTable('users')) {
Route::get('/logwith/{id}', function ($id) {
    Auth::loginUsingId($id);
    return redirect()->route('frontend.home');
});
//}

Route::get('settings', function () {
    echo phpinfo();
});
