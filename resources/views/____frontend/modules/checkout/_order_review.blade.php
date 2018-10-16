<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="table-responsive">
            <table class="tablec">
                <tr>
                    <td>{{ trans('general.product_name') }}</td>
                    <td>{{ trans('general.price') }}</td>
                    <td>{{ trans('general.qty') }}</td>
                    <td>{{ trans('general.subtotal') }}</td>
                </tr>
                @foreach($cart as $item)
                    <tr>
                        <td>{{ $item->options->product->name }}</td>
                        <td><p class="tabletextp">{{ $item->price }}</p></td>
                        <td>{{ $item->qty }}</td>
                        <td>
                            <p class="tabletextp">{{ session()->get('currency')->symbol }}  {{ $item->price }}</p>
                        </td>
                    </tr>
                @endforeach
                <tr>
                    <td colspan="3">
                        <p class="tabletext panel-heading">{{ trans('general.grand_total') }}</p>
                        @if(!request('free_shipment'))
                            <p class="tabletext panel-heading">{{ trans('general.shipping_cost') }}</p>
                        @endif
                        <p class="tabletext panel-heading">{{ trans('general.gross_total') }}</p>
                    </td>
                    <td>
                        <p class="tabletext panel-heading"><span id="grandTotal" value="{{ $shipment['grandTotal'] }}">
                                <b>{{ request('grandTotal') }}</b>
                            </span> <b>{{ trans('general.kd') }}</b>
                            {{--<input type="hidden" name="grandTotal" value="{{ $shipment['grandTotal'] }}">--}}
                        </p>
                        @if(isset($shipment['free_shipment']) && !$shipment['free_shipment'])
                            <p class="tabletext panel-heading">
                            <span id="charge" class="charge" value="{{ $shipment['charge'] }}">
                                <b>{{ $shipment['charge'] }}</b>
                            </span> <b>{{ trans('general.kd') }}</b>
                                {{--<input type="hidden" name="charge" value="{{ $shipment['charge'] }}" class="charge">--}}
                            </p>
                        @endif
                        <p class="tabletext panel-heading">
                            <span id="grossTotal" value=""><b>{{ $shipment['grossTotal'] }}</b></span>
                            <b>{{ trans('general.kd') }}</b>
                            {{--<input type="hidden" name="grossTotal" class="grossTotal"--}}
                                   {{--value="{{ $shipment['grossTotal'] }}">--}}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td colspan="4">
                        <div class="button-check">
                            <div class="">
                                                                    <span class="left-btn"><a
                                                                                href="{{ route('frontend.cart.index') }}">{{ trans('general.forget_item_edit_here') }}</a></span>
                                <button type="submit"
                                        class="btn right-btn custom-button">
                                    {{ trans('general.continue') }}
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>