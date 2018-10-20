<?php

namespace App\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;

class CategoryStore extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name_ar' => 'required|min:3',
            'name_en' => 'required|min:3',
            'description_en' => 'min:3|nullable',
            'description_ar' => 'min:3|nullable',
            'image' => 'image|nullable',
            'limited' => 'boolean|nullable',
            'order' => 'integer|nullable',
            'is_home' => 'boolean|nullable',
            'active' => 'boolean|nullable',
        ];
    }
}
