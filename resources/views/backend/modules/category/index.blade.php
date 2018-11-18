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
                            <th>Id</th>
                            <th>Name</th>
                            <th>name_en</th>
                            <th>name_ar</th>
                            <th>active</th>
                            <th>image</th>
                            <th width="300">Sub Categories</th>
                            <th>actions</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>name_en</th>
                            <th>name_ar</th>
                            <th>active</th>
                            <th>image</th>
                            <th>Sub Categories</th>
                            <th>actions</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        @foreach($elements as $element)
                            <tr>
                                <td>{{ $element->id }}</td>
                                <td>{{ $element->name }}</td>
                                <td>
                                    <span class="label label-lg {{ activeLabel($element->active) }} text-uppercase">{{ $element->name_en }}</span>
                                </td>
                                <td>
                                    <span class="label label-lg {{ activeLabel($element->active) }} text-uppercase">{{ $element->name_ar }}</span>
                                </td>
                                <td>
                                    <span class="label label-lg {{ activeLabel($element->active) }} text-uppercase">{{ activeText($element->active)}}</span>
                                </td>
                                <td>
                                    <img src="{{ asset('storage/uploads/images/thumbnail/'.$element->image) }}" alt="" class="img-sm">
                                </td>
                                <td>
                                    @if(!$element->children->isEmpty())
                                        <ul>
                                            @foreach($element->children as $child)
                                                <li>
                                                    <div class="btn-group">
                                                        <button type="button"
                                                                class="btn {{ $child->active ? 'green' : 'red' }}  dropdown-toggle"
                                                                data-toggle="dropdown"> {{ $child->id }} - {{ $child->name }}
                                                            <i class="fa fa-angle-down"></i>
                                                        </button>
                                                        <ul class="dropdown-menu pull-right" role="menu">
                                                            <li>
                                                                <a href="{{ route('backend.category.create',['parent_id' => $child->id]) }}">
                                                                    <i class="fa fa-fw fa-edit"></i> assign child</a>
                                                            </li>
                                                            <li>
                                                                <a href="{{ route('backend.category.edit',$child->id) }}">
                                                                    <i class="fa fa-fw fa-edit"></i> Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="{{ route('backend.activate',['model' => 'category','id' => $child->id]) }}">
                                                                    <i class="fa fa-fw fa-check-circle"></i> toggle
                                                                    active</a>
                                                            </li>
                                                            <li>
                                                                <a data-toggle="modal" href="#" data-target="#basic"
                                                                   data-title="Delete"
                                                                   data-content="Are you sure you want to delete {{ $child->name  }}? "
                                                                   data-form_id="delete-{{ $child->id }}"
                                                                >
                                                                    <i class="fa fa-fw fa-recycle"></i> delete</a>
                                                                <form method="post" id="delete-{{ $child->id }}"
                                                                      action="{{ route('backend.category.destroy',$child->id) }}">
                                                                    @csrf
                                                                    <input type="hidden" name="_method" value="delete"/>
                                                                    <button type="submit" class="btn btn-del hidden">
                                                                        <i class="fa fa-fw fa-times-circle"></i> delete
                                                                    </button>
                                                                </form>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <br>
                                                    <br>
                                                @if(!$child->children->isEmpty())
                                                    <ul>
                                                        @foreach($child->children as $sub)
                                                            <li>
                                                                <div class="btn-group">
                                                                    <button type="button"
                                                                            class="btn {{ $sub->active ? 'green' : 'red' }} btn-outline dropdown-toggle"
                                                                            data-toggle="dropdown"> {{ $sub->id }}  - {{ $sub->name }}
                                                                        <i class="fa fa-angle-down"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu pull-right" role="menu">
                                                                        <li>
                                                                            <a href="{{ route('backend.category.edit',$sub->id) }}">
                                                                                <i class="fa fa-fw fa-edit"></i>
                                                                                Edit</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="{{ route('backend.activate',['model' => 'category','id' => $sub->id]) }}">
                                                                                <i class="fa fa-fw fa-check-circle"></i>
                                                                                toggle active</a>
                                                                        </li>
                                                                        <li>
                                                                            <a data-toggle="modal" href="#"
                                                                               data-target="#basic"
                                                                               data-title="Delete"
                                                                               data-content="Are you sure you want to delete {{ $sub->name  }}? "
                                                                               data-form_id="delete-{{ $sub->id }}"
                                                                            >
                                                                                <i class="fa fa-fw fa-recycle"></i>
                                                                                delete</a>
                                                                            <form method="post"
                                                                                  id="delete-{{ $sub->id }}"
                                                                                  action="{{ route('backend.category.destroy',$sub->id) }}">
                                                                                @csrf
                                                                                <input type="hidden" name="_method"
                                                                                       value="delete"/>
                                                                                <button type="submit"
                                                                                        class="btn btn-del hidden">
                                                                                    <i class="fa fa-fw fa-times-circle"></i>
                                                                                    delete
                                                                                </button>
                                                                            </form>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <br>
                                                        @endforeach
                                                    </ul>
                                                @endif
                                                </li>
                                            @endforeach
                                        </ul>
                                    @else
                                        <span class="label label-info">no sub categories</span>
                                    @endif
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <button type="button" class="btn green btn-xs btn-outline dropdown-toggle"
                                                data-toggle="dropdown"> Actions
                                            <i class="fa fa-angle-down"></i>
                                        </button>
                                        <ul class="dropdown-menu pull-right" role="menu">
                                            <li>
                                                <a href="{{ route('backend.category.edit',$element->id) }}">
                                                    <i class="fa fa-fw fa-edit"></i> Edit</a>
                                            </li>
                                            <li>
                                                <a href="{{ route('backend.category.create',['parent_id' => $element->id]) }}">
                                                    <i class="fa fa-fw fa-edit"></i> assign child</a>
                                            </li>
                                            <li>
                                                <a href="{{ route('backend.activate',['model' => 'product','id' => $element->id]) }}">
                                                    <i class="fa fa-fw fa-check-circle"></i> toggle active</a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" href="#" data-target="#basic"
                                                   data-title="Delete"
                                                   data-content="Are you sure you want to delete {{ $element->name  }}? "
                                                   data-form_id="delete-{{ $element->id }}"
                                                >
                                                    <i class="fa fa-fw fa-recycle"></i> delete</a>
                                                <form method="post" id="delete-{{ $element->id }}"
                                                      action="{{ route('backend.category.destroy',$element->id) }}">
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