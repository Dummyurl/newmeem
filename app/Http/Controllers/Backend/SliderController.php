<?php

namespace App\Http\Controllers\Backend;

use App\Models\Slider;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $elements = Slider::all();
        return view('backend.modules.slider.index', compact('elements'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.modules.slider.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $element = Slider::create($request->request->all());
        if ($element) {
            if ($request->hasFile('image')) {
                $this->saveMimes($element, $request, ['image'], ['1905', '750'], false);
            }
            return redirect()->route('backend.slider.index')->with('success', trans('message.store_success'));
        }
        return redirect()->back()->with('error', trans('message.store_error'));
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
        $element = Slider::whereId($id)->first();
        return view('backend.modules.slider.edit', compact('element'));
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
        $element = Slider::whereId($id)->first();
        $updated = $element->update($request->request->all());
        if ($updated) {
            if ($request->hasFile('image')) {
                $this->saveMimes($element, $request, ['image'], ['1905', '750'], false);
            }
            return redirect()->route('backend.slider.index')->with('success', trans('message.update_success'));
        }
        return redirect()->back()->with('error', trans('message.update_error'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $element = Slider::whereId($id)->first()->delete();
        if ($element) {
            return redirect()->back()->with('success', trans('message.delete_success'));
        }
        return rediret()->back() - with('error', trans('message.delete_error'));
    }
}
