<?php

namespace App\Http\Controllers\Backend;

use App\Models\Page;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $elements = Page::all();
        return view('backend.modules.page.index', compact('elements'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.modules.page.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validate = validator($request->request->all(), [
            'title_ar' => 'required|alpha',
            'title_en' => 'required|alpha',
            'slug_ar' => 'required',
            'slug_en' => 'required',
            'url' => 'required|url',
            'content_ar' => 'required|min:100',
            'content_en' => 'required|min:100',
        ]);
        if ($validate->fails()) {
            return redirect()->back()->withErrors($validate)->withInput(Input::all());
        }
        $element = Page::create($request->request->all());
        if ($element) {
            if ($request->hasFile('image')) {
                $this->saveMimes($element, $request, ['image'], ['1000', '1000'], false);
            }
            return redirect()->route('backend.page.index')->with('success', 'page saved.');
        }
        return redirect()->back()->with('error', 'error .. please try again');
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
        $element = Page::whereId($id)->first();
        return view('backend.modules.page.edit', compact('element'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validate = validator($request->request->all(), [
            'title_ar' => 'required|alpha',
            'title_en' => 'required|alpha',
            'slug_ar' => 'required',
            'slug_en' => 'required',
            'url' => 'required',
            'content_ar' => 'required|min:100',
            'content_en' => 'required|min:100',
        ]);
        if ($validate->fails()) {
            return redirect()->back()->withErrors($validate);
        }
        $element = Page::whereId($id)->first();
        $updated = $element->update($request->request->all());
        if ($updated) {
            if ($request->hasFile('image')) {
                $this->saveMimes($element, $request, ['image'], ['1000', '1000'], false);
            }
            return redirect()->route('backend.page.index')->with('success', 'page updated.');
        }
        return redirect()->back()->with('error', 'error .. please try again');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $element = Page::whereId($id)->first();
        if ($element->delete()) {
            return redirect()->back()->with('success', 'page deleted');
        }
        return redirect()->back()->with('success', 'page is not deleted.');
    }
}
