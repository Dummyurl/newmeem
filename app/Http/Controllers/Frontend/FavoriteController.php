<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{

    public function index()
    {
        $elements = User::whereId(auth()->user()->id)->first()->favorites()->with('gallery.images', 'favorites')->paginate(12);
        return view('frontend.modules.favorite.index', compact('elements'));
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function add($id)
    {
        $element = Product::whereId($id)->first()->favorites()->sync(auth()->user()->id);
        return redirect()->back()->with('success', trans('message.favorite_saved'));
    }


    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function remove($id)
    {
        $element = Favorite::where(['product_id' => $id, 'user_id' => auth()->user()->id])->first()->delete();
        if ($element) {
            return redirect()->back()->with('success', trans('general.favorite_deleted'));
        }
        return redirect()->back()->with('error', trans('general.favorite_not_deleted'));
    }

}
