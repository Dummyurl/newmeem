@extends('frontend.layouts.app')
@section('body')
    <!-- BREADCRUMBS -->
    <section class="page-section breadcrumbs">
        <div class="container">
            <div class="page-header">
                <h1>{{ trans('general.order_history') }}</h1>
            </div>
            @include('frontend.partials._breadcrumbs',['name' => trans('general.general.order_history')])
        </div>
    </section>
    <!-- /BREADCRUMBS -->
    <!-- PAGE -->
    <section class="page-section">
        <div class="container">
            @if($elements->isNotEmpty())
                <div class="col-lg-12">
                    <div class="portlet-body">
                        <table id="dataTable" class="table table-striped table-bordered table-hover" cellspacing="0"
                               width="100%">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>products/size/qty</th>
                                <th>net price</th>
                                <th>discount</th>
                                <th>price</th>
                                <th>reference_id</th>
                                <th>status</th>
                                <th>address</th>
                                <th>mobile</th>
                                <th>created_at</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>products/size/qty</th>
                                <th>net price</th>
                                <th>discount</th>
                                <th>price</th>
                                <th>reference_id</th>
                                <th>status</th>
                                <th>address</th>
                                <th>mobile</th>
                                <th>created_at</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            @foreach($orders as $element)
                                <tr>
                                    <td>{{ $element->id }}</td>
                                    <td>
                                        @if(!$element->order_metas->isEmpty())
                                            @foreach($element->order_metas as $meta)
                                                <li>
                                                    @if($meta->product)

                                                        {{ $meta->product->name_ar}}
                                                        - {{ $meta->product_attribute->size->name_ar }}
                                                        - {{ $meta->qty }}
                                                    @else
                                                        <span class="label label-warning">Product No longer exists</span>
                                                    @endif
                                                </li>
                                            @endforeach
                                        @endif
                                    </td>
                                    <td>{{ $element->net_price}}</td>
                                    <td>{{ $element->discount}}</td>
                                    <td>{{ $element->price}}</td>
                                    <td>{{ $element->reference_id}}</td>
                                    <td>
                                        <button class="btn btn-{{ $element->status === 'success' ? 'success' : 'info' }}">{{ $element->status }}</button>
                                    </td>
                                    <td>{{ $element->address }}</td>
                                    <td>
                                        <button class="btn btn-info">{{ $element->mobile }}</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-info">{{ $element->created_at->diffForHumans()}}</button>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        {{ $elements->render() }}
                    </div>
                </div>
                <div class="col-lg-12">
                    @foreach($elements as $element)
                        <div class="col-lg-3" style="margin-bottom: 15px;">
                            <div class="thumbnail bordered no-padding">
                                <div class="media">
                                    <a class="media-link" data-gal="prettyPhoto"
                                       href="{{ asset(env('LARGE').$element->image) }}">
                                        <img src="{{ asset(env('THUMBNAIL').$element->image) }}"
                                             alt="{{ $element->name }}"/>
                                        <span class="icon-view">
                                    <strong><i class="fa fa-eye"></i></strong>
                                </span>
                                    </a>
                                </div>
                                <div class="caption text-center">
                                    <h4 class="caption-title"><a
                                                href="{{ route('frontend.product.show', $element->id) }}">{{ $element->name }}</a>
                                    </h4>
                                    <div class="price">
                                        @if($element->isOnSale)
                                            <ins>{{ $element->convertedSalePrice}} <span>{{ $currency->symbol }}</span>
                                            </ins>
                                            <del>{{ $element->convertedPrice }} <span>{{ $currency->symbol }}</span>
                                            </del>
                                        @else
                                            <ins>{{ $element->convertedPrice }} <span>{{ $currency->symbol }}</span>
                                            </ins>
                                        @endif
                                    </div>
                                    <div class="buttons">
                                        <a class="btn btn-theme btn-theme-transparent btn-wish-list"
                                           href="{{ route('frontend.favorite.remove', $element->id) }}"><i
                                                    class="fa fa-heart-o"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="col-lg-12">
                    @include('frontend.partials.pagination')
                </div>
            @else
                <div class="alert alert-warning alert-block" role="alert">
                    {{ trans('general.no_orders') }}
                </div>
            @endif
        </div>
    </section>
    <!-- /PAGE -->
@endsection


