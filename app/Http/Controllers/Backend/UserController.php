<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $elements = User::all();
        return view("backend.modules.user.index", compact('elements'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.modules.user.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = validator($request->request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'mobile' => 'required',
            'country' => 'required|alpha',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->withInput(Input::all())->withErrors($validator);
        }
        $element = User::create($request->except('password_confirmation'));
        if ($element) {
            return redirect()->route('backend.user.index')->with('success', 'user created');
        }
        return redirect()->route('backend.user.create')->with('error', 'user not created');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $element = User::whereId($id)->first();
        return view('backend.modules.user.edit', compact('element'));
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
        $element = User::whereId($id)->first();
        if ($request->has('password')) {
            $element->password = bcrypt($request->password);
        }
        if ($request->has('email')) {
            $element->email = $request->email;
            $element->save();
        }
        $updated = $element->update($request->except('email'));
        if ($updated) {
            return redirect()->route('backend.user.index')->with('success', 'user updated');
        }
        return redirect()->route('backend.user.edit', $id)->with('error', 'user not updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $element = User::whereId($id)->first();

        if ($element->delete()) {
            return redirect()->back()->with('success', 'User deleted.');
        }
        return redirect()->back()->with('error', 'user not deleted !!!');
    }

    public function getResetPassword(Request $request)
    {
        $validator = validator(request()->all(), [
            'email' => 'required|email|exists:users,email',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }
        $email = $request->email;
        return view('backend.modules.user.reset', compact('email'));

    }

    /**
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function postResetPassword(Request $request)
    {
        $validator = validator(request()->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->with('error', 'error occurred')->withInputs();
        }
        $user = User::where('email', $request->email)->first();
        if ($user) {
            $user->password = bcrypt(request()->password);
            $user->save();
            return redirect()->route('backend.user.index', ['role' => session()->has('role') ? session()->get('role') : 3])->with('success', 'password changed');
        }
        return redirect()->back()->with('error', 'error occurred')->withInputs();
    }

}
