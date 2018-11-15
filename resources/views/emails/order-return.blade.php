@component('mail::message')
<div style="text-align: left;">
    {{ trans('general.date') }} : {{ Carbon\Carbon::today()->format('d/m/Y') }}
</div>
# {{ trans('general.order_number') }}{{ $order_no }}
<strong style="direction: rtl; float: right;"> {{ trans('general.name') }} / {{ $name }}</strong><br>
<strong style="direction: rtl; float: right;"> {{ trans('general.mobile') }}/ {{ $mobile }}</strong><br>
<strong style="direction: rtl; float: right;"> {{ trans('general.address') }} / {{ $address }}</strong><br>
<strong style="direction: rtl; float: right;"> {{ trans('general.email') }} / {{ $email }}</strong><br>
<strong style="direction: rtl; float: right;"> {{ trans('general.purchase_date') }} / {{ $purchase_date }}</strong><br>
@if($notes)
<strong style="direction: rtl; float: right;"> {{ trans('general.notes') }} / {{ $notes }}</strong><br>
@endif
<br>



@component('mail::panel')
<div style="font-size: large; font-weight: bold; direction: rtl !important;">
    {{ trans('message.order_return_policy') }}
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
