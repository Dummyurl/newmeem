@extends('backend.layouts.app')

@section('breadcrumbs')
    {{ Breadcrumbs::render('backend.user.index') }}
@endsection
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
                            <th>Id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>mobile</th>
                            <th>phone</th>
                            <th>address</th>
                            <th>area</th>
                            <th>country</th>
                            <th>active</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>mobile</th>
                            <th>phone</th>
                            <th>address</th>
                            <th>area</th>
                            <th>country</th>
                            <th>active</th>
                            <th>Action</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        @foreach($elements as $element)
                            <tr>
                                <td>{{ $element->id }}</td>
                                <td>{{ $element->name }}</td>
                                <td>{{ $element->email  }}</td>
                                <td>{{ $element->mobile }}</td>
                                <td>{{ $element->phone }}</td>
                                <td>{{ $element->address }}</td>
                                <td>{{ $element->area }}</td>
                                <td>{{ $element->country }}</td>
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
                                                <a href="{{ route('backend.reset.password',['email' => $element->email]) }}">
                                                    <i class="fa fa-fw fa-edit"></i> Reset Password</a>
                                            </li>
                                            @if(auth()->user()->isAdmin)
                                                <li>
                                                    <a href="{{ route('backend.user.edit',$element->id) }}">
                                                        <i class="fa fa-fw fa-check-circle"></i> edit</a>
                                                </li>
                                            @endif
                                            <li>
                                                <a href="{{ route('backend.activate',['model' => 'user','id' => $element->id]) }}">
                                                    <i class="fa fa-fw fa-check-circle"></i> toggle active</a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" href="#" data-target="#basic"
                                                   data-title="Delete"
                                                   data-content="Are you sure you want to delete {{ $element->name  }}?
                                                   </br> <h3 class='text-danger'>please note that all favorites / coupons shall be deleted accordingly.</h3>
                                                    "
                                                   data-form_id="delete-{{ $element->id }}"
                                                >
                                                    <i class="fa fa-fw fa-recycle"></i> delete</a>
                                                <form method="post" id="delete-{{ $element->id }}"
                                                      action="{{ route('backend.user.destroy',$element->id) }}">
                                                    @csrf
                                                    <input type="hidden" name="_method" value="delete"/>
                                                    <button type="submit" class="btn btn-del hidden">
                                                        <i class="fa fa-fw fa-times-circle"></i> delete
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