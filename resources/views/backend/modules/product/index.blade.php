@extends('backend.layouts.app')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <!-- BEGIN EXAMPLE TABLE PORTLET-->
            <div class="portlet light ">
                @include('backend.partials.forms.form_title')
                <div class="portlet-body">
                    <div class="m-heading-1 border-green m-bordered">
                        <h3>Important Information</h3>
                        <p>
                            Roles are very important for the application.
                        </p>
                        <p> Some Information about roles.
                            <a class="btn red btn-outline" href="http://datatables.net/" target="_blank">the official
                                documentation</a>
                        </p>
                    </div>
                    {{--<table id="dataTable" class="table table-striped table-bordered table-hover" cellspacing="0"--}}
                    <table id="dataTable" class="table table-striped table-bordered table-hover" cellspacing="0">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>sku</th>
                            <th>name_ar</th>
                            <th>HomeDeliveryAvail</th>
                            <th>ShipmentAvail</th>
                            <th>on_sale</th>
                            <th>OnHome</th>
                            <th>price</th>
                            <th>sale_price</th>
                            <th>weight</th>
                            <th>image</th>
                            <th>end_sale</th>
                            <th>active</th>
                            <th>actions</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <th>id</th>
                            <th>sku</th>
                            <th>name_ar</th>
                            <th>HomeDeliverAvailability</th>
                            <th>shipment_availability</th>
                            <th>on_sale</th>
                            <th>OnHome</th>
                            <th>price</th>
                            <th>sale_price</th>
                            <th>weight</th>
                            <th>image</th>
                            <th>end_sale</th>
                            <th>active</th>
                            <th>actions</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        @foreach($elements as $element)
                            <tr>
                                <td>{{ $element->id }}</td>
                                <td>{{ $element->sku }}</td>
                                <td>{{ $element->name_ar }}</td>
                                <td>
                                    <span class="label {{ activeLabel($element->home_delivery_availability) }}">{{ activeText($element->home_delivery_availability,'Yes') }}</span>
                                </td>
                                <td>
                                    <span class="label {{ activeLabel($element->shipment_availability) }}">{{ activeText($element->shipment_availability,'Yes') }}</span>
                                </td>
                                <td>
                                    <span class="label {{ activeLabel($element->on_sale) }}">{{ activeText($element->on_sale,'OnSale') }}</span>
                                </td>
                                <td>
                                    <span class="label {{ activeLabel($element->on_home) }}">{{ activeText($element->on_home,'onHome') }}</span>
                                </td>
                                <td>
                                    {{ $element->price }}
                                </td>
                                <td>
                                    {{ $element->sale_price }}
                                </td>
                                <td>
                                    {{ $element->weight }}
                                </td>
                                <td>
                                    <img class="img-xs"
                                         src="{{ asset('storage/uploads/images/thumbnail/'.$element->image) }}" alt="">
                                </td>
                                <td>{{ $element->end_sale }}</td>
                                <td>
                                    <span class="label {{ activeLabel($element->active) }}">{{ activeText($element->active) }}</span>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <button type="button" class="btn green btn-xs btn-outline dropdown-toggle"
                                                data-toggle="dropdown"> Actions
                                            <i class="fa fa-angle-down"></i>
                                        </button>
                                        <ul class="dropdown-menu pull-right" role="menu">
                                            <li>
                                                <a href="{{ route('backend.product.edit',$element->id) }}">
                                                    <i class="fa fa-fw fa-edit"></i> Edit</a>
                                            </li>
                                            <li>
                                                <a href="{{ route('backend.gallery.show',$element->id) }}">
                                                    <i class="fa fa-fw fa-edit"></i> View Gallery</a>
                                            </li>
                                            <li>
                                                <a href="{{ route('backend.activate',['model' => 'product','id' => $element->id]) }}">
                                                    <i class="fa fa-fw fa-check-circle"></i> toggle active</a>
                                            </li>
                                            <li>
                                                <form method="post"
                                                      action="{{ route('backend.product.destroy',$element->id) }}">
                                                    @csrf
                                                    <input type="hidden" name="_method" value="delete"/>
                                                    <button type="submit" class="btn btn-del">
                                                        <i class="fa fa-times-rectangle"></i>delete
                                                    </button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection