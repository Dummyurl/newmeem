<?php

namespace App\Http\Controllers\Backend;

use App\Models\Notification;
use App\Services\Traits\NotificationHelper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class NotificationController extends Controller
{
    use NotificationHelper;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $elements = Notification::all();
        return view('backend.modules.notification.index', compact('elements'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.modules.notification.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validate = validator($request->all(), [
            'title' => 'required',
            'description' => 'required'
        ]);
        if($validate->fails()) {
            return redirect()->route('backend.notification.create')->withErrors($validate)->withInput(Input::all());
        }
        $element = Notification::create($request->request->all());
        if ($element) {
            if ($request->hasFile('image')) {
                $this->saveMimes($element, $request, ['image'], ['500', '500'], false);
            }
            $this->notify('New Notification from Harayer7');
            return redirect()->route('backend.notification.index')->with('success', 'Notification added');
        }
        return redirect()->back()->with('error', 'Notification is not saved.');
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $element = Notification::whereId($id)->first();
        if ($element->delete()) {
            return redirect()->route('backend.notification.index')->with('success', 'aboutus deleted');
        }
        return redirect()->back()->with('error', 'aboutus is not deleted.');
    }
}
