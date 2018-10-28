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
                    <table id="dataTable" class="table table-striped table-bordered table-hover" cellspacing="0">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>description</th>
                            <th>sent at</th>
                            {{--<th>action</th>--}}
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>description</th>
                            <th>sent at</th>
                            {{--<th>action</th>--}}
                        </tr>
                        </tfoot>
                        <tbody>
                        @foreach($elements as $element)
                            <tr>
                                <td> {{$element->id}}</td>
                                <td> {{$element->title}} </td>
                                <td> {{$element->description}} </td>
                                <td> {{$element->created_at}} </td>
                                {{--<td>--}}
                                    {{--<div class="btn-group">--}}
                                        {{--<button type="button" class="btn green btn-xs btn-outline dropdown-toggle"--}}
                                                {{--data-toggle="dropdown"> Actions--}}
                                            {{--<i class="fa fa-angle-down"></i>--}}
                                        {{--</button>--}}
                                        {{--<ul class="dropdown-menu pull-right" role="menu">--}}
                                            {{--<li>--}}
                                                {{--<a href="{{ route('backend.faq.edit',$element->id) }}">--}}
                                                    {{--<i class="fa fa-fw fa-edit"></i> Edit</a>--}}
                                            {{--</li>--}}
                                            {{--<li>--}}
                                                {{--<a data-toggle="modal" href="#" data-target="#basic"--}}
                                                   {{--data-title="Delete"--}}
                                                   {{--data-content="Are you sure you want to delete term {{ $element->title_ar }}? "--}}
                                                   {{--data-form_id="delete-{{ $element->id }}"--}}
                                                {{-->--}}
                                                    {{--<i class="fa fa-fw fa-recycle"></i> delete</a>--}}
                                                {{--<form method="post" id="delete-{{ $element->id }}"--}}
                                                      {{--action="{{ route('backend.faq.destroy',$element->id) }}">--}}
                                                    {{--@csrf--}}
                                                    {{--<input type="hidden" name="_method" value="delete"/>--}}
                                                    {{--<button type="submit" class="btn btn-del hidden">--}}
                                                        {{--<i class="fa fa-fw fa-times-circle"></i> delete--}}
                                                    {{--</button>--}}
                                                {{--</form>--}}
                                            {{--</li>--}}
                                        {{--</ul>--}}
                                    {{--</div>--}}
                                {{--</td>--}}
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection