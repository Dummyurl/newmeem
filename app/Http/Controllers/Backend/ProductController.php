<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\ProductStore;
use App\Http\Requests\Backend\ProductUpdate;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\Tag;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->has('type')) {
            $elements = Product::where(request('type'), true)->with('gallery', 'product_attributes.size', 'product_attributes.color')->orderBy('id', 'desc')->paginate(100);
        } else {
            $elements = Product::with('gallery', 'product_attributes.size', 'product_attributes.color')->orderBy('id', 'desc')->paginate(100);
        }
        return view('backend.modules.product.index', compact('elements'));
    }

    public function trashed()
    {
        $elements = Product::onlyTrashed()->paginate(100);
        return view('backend.modules.product.index', compact('elements'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::active()->onlyParent()->with('children.children')->get();
        $tags = Tag::active()->get();
        $brands = Brand::active()->get();
        return view('backend.modules.product.create', compact('categories', 'tags','brands'));
    }


    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductStore $request)
    {
        $element = Product::create($request->except(['_token', 'image', 'categories', 'tags','brands']));
        if ($element) {
            $element->tags()->sync($request->tags);
            $element->brands()->sync($request->brands);
            $element->categories()->sync($request->categories);
            if ($request->hasFile('image')) {
                $this->saveMimes($element, $request, ['image'], ['1080', '1440'], true);
            }
            if ($request->hasFile('size_chart_image')) {
                $this->saveMimes($element, $request, ['size_chart_image'], ['500', '500'], false);
            }
            return redirect()->route('backend.attribute.create', ['product_id' => $element->id, 'type' => 'product'])->with('success', 'product saved.');
        }
        return redirect()->back()->with('error', 'unknown error');

    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $element = Product::whereId($id)->with('categories', 'tags','brands')->first();
        $categories = Category::active()->onlyParent()->with('children.children')->get();
        $tags = Tag::active()->get();
        $brands = Brand::active()->get();
        return view('backend.modules.product.edit', compact('element', 'tags', 'categories','brands'));
    }

    /**
     * Update the specified resource in storage.
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductUpdate $request, $id)
    {
        $element = Product::whereId($id)->first();
        $updated = $element->update($request->except(['_token', 'image', 'tags', 'categories','brands']));
        if ($request->hasFile('image')) {
            $this->saveMimes($element, $request, ['image'], ['1080', '1440'], true);
        }
        if ($request->hasFile('size_chart_image')) {
            $this->saveMimes($element, $request, ['size_chart_image'], ['600', '600'], false);
        }
        if ($updated) {
            $element->categories()->sync($request->categories);
            $element->tags()->sync($request->tags);
            $element->brands()->sync($request->brands);
            return redirect()->route('backend.product.index')->with('success', 'product saved.');
        }
        return redirect()->route('backend.product.edit', $id)->with('error', 'product not saved.');
    }

    /**
     * Remove the specified resource from storage.
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $element = Product::whereId($id)->first();
        if ($element->delete()) {
            return redirect()->back()->with('success', 'product deleted');
        }
        return redirect()->back()->with('error', 'product is not deleted');
    }

    public function restore($id)
    {
        $element = Product::withTrashed()->whereId($id)->first();
        $element->restore();
        return redirect()->back()->with('success', 'product restored');
    }

}
