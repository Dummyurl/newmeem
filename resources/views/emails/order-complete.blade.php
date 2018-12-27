@component('mail::message')
<div style="text-align: left;">
    {{ trans('general.date') }} : {{ Carbon\Carbon::today()->format('d/m/Y') }}
</div>
# {{ trans('general.order_number') }}{{ $order->id }}
<strong style="direction: rtl; float: right;"> {{ trans('general.gentlemen') }} / {{ $user->name }}</strong><br>
<strong style="direction: rtl; float: right;"> {{ trans('general.address') }}/ {{ $user->address }}</strong><br>
<strong style="direction: rtl; float: right;"> {{ trans('general.area') }}/ {{ $order->area }}</strong><br>
<strong style="direction: rtl; float: right;"> {{ trans('general.mobile') }} / {{ $user->mobile }}</strong>
<br>

</br>
@component('mail::table')
| {{ trans('general.product_name') }}       | {{ trans('general.price') }}         | Qty  | {{ trans('general.size') }}  | {{ trans('general.color') }}  | {{ trans('general.product_sku') }}  |
| ------------- |:-------------:| --------:| --------:|
@foreach($order->order_metas as $orderMeta)
    | {{ $orderMeta->product->name }}         | {{ $orderMeta->product->on_sale ? $orderMeta->product->sale_price : $orderMeta->product->price }}| {{ $orderMeta->qty }}| {{ $orderMeta->product_attribute->size->name }} | {{ $orderMeta->product_attribute->color->name }} | {{ $orderMeta->product->id }}         |
@endforeach
| total        |     {{ $order->net_price }}        |           |
@endcomponent
{{--@component('mail::table')--}}
{{--| Prices       | {{ $element->title }}         | S.  |--}}
{{--| ------------- |:-------------:| --------:|--}}
{{--| {{ $element->price }}         | <div style="direction: rtl !important;">{!! $element->content !!}</div>           | 1         |--}}
{{--| {{ $element->total  }}        | total             |           |--}}
{{--| {{ $element->discount  }}     | discount         |           |--}}
{{--| {{ $element->net_total  }}    | net total         |           |--}}
{{--@endcomponent--}}
<hr>

@component('mail::panel')
<div style="font-size: large; font-weight: bold; direction: rtl !important;">
    {{ trans('message.we_received_your_order_order_shall_be_reviewed_thank_your_for_choosing_our_service') }}
</div>
@endcomponent

@component('mail::button', ['url' => env('APP_URL'),'class' => 'button-black'])
<strong>{{ env('APP_NAME') }}</strong>
@endcomponent


<div style="text-align: center; width: 100%; float: left; font-weight: bolder;">
    مع تحيات,<br>
    {{ env('APP_NAME') }}
</div>
@endcomponent
