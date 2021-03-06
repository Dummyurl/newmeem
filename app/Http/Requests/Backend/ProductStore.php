<?php

namespace App\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;

class ProductStore extends FormRequest
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
            'sku' => 'required|min:2',
            'name_ar' => 'required:min:3|max:200',
            'name_en' => 'required|min:3|max:200',
//            'home_delivery_availability' => 'required',
//            'shipment_availability' => 'required',
            'on_sale' => 'boolean',
            'on_sale_on_homepage' => 'boolean',
            'on_homepage' => 'boolean',
            'price' => 'required|numeric|min:0.5|max:999',
            'weight' => 'required|numeric|min:0.1|max:10',
            'sale_price' => 'numeric|nullable|min:0.5|max:999',
            'size_chart_image' => 'image|nullable',
            'description_en' => 'min:3|nullable',
            'description_ar' => 'min:3|nullable',
            'notes_ar' => 'min:3|nullable',
            'notes_en' => 'min:3|nullable',
            'image' => 'required|image',
            'size_chart_image' => 'nullable|image',
            'start_sale' => 'date|after_or_equal:today|nullable',
            'end_sale' => 'date|after_or_equal:start_sale|nullable',
            'active' => 'required|boolean',
            'categories' => 'required|array',
            'tags' => 'required|array'
        ];
    }
}
