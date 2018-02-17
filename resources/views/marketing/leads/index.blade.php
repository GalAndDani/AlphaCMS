@extends('layouts.app') 
@include('templates.app.footer') 
@section('js')
<script type="text/javascript" src="{{ asset('js/theme/plugins/tables/datatables/datatables.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/tables/datatables/extensions/autofill.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/tables/datatables/extensions/select.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/forms/selects/select2.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/ui/fab.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/ui/prism.min.js') }}"></script>

<script type="text/javascript" src="{{ asset('js/theme/core/app.js') }}"></script>
<!-- <script type="text/javascript" src="{{ asset('js/theme/pages/datatables_extension_autofill.js')}}"></script> -->
<script type="text/javascript" src="{{ asset('js/marketing/leads/datatable.js')}}"></script>
@endsection 
@section('content')
<!-- Page header -->
<div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4>
                <i class="icon-arrow-right6 position-left"></i>
                <span class="text-semibold">מרקטינג ושיווק</span> - רשימת לידים</h4>
        </div>

        <div class="heading-elements">
            <div class="heading-btn-group">
                <a href="#" class="btn btn-link btn-float has-text">
                    <i class="icon-bars-alt text-primary"></i>
                    <span>סטטיסטיקה</span>
                </a>
                <a href="#" class="btn btn-link btn-float has-text">
                    <i class="icon-calculator text-primary"></i>
                    <span>חשבוניות</span>
                </a>
                <a href="#" class="btn btn-link btn-float has-text">
                    <i class="icon-calendar5 text-primary"></i>
                    <span>לו"ז</span>
                </a>
            </div>
        </div>
    </div>

    <div class="breadcrumb-line">
        <ul class="breadcrumb">
            <li>
                <a href="{{ route('home') }}">
                    <i class="icon-home2 position-left"></i> דף הבית</a>
            </li>
            <li>מרקטינג ושיווק</li>
            <li>ניהול לידים</li>
            <li class="active">רשימת לידים</li>
        </ul>

        <ul class="breadcrumb-elements">
            <li>
                <a href="#">
                    <i class="icon-comment-discussion position-left"></i> תמיכה</a>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="icon-gear position-left"></i>
                    הגדרות
                    <span class="caret"></span>
                </a>

                <ul class="dropdown-menu dropdown-menu-right">
                    <li>
                        <a href="#">
                            <i class="icon-user-lock"></i> אבטחת משתמש</a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon-statistics"></i> אנליזות</a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon-accessibility"></i> נגישות</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <i class="icon-gear"></i> הגדרות</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
<!-- /page header -->


<!-- Content area -->
<div class="content">
    <!-- Top right menu -->
    <ul class="fab-menu fab-menu-absolute fab-menu-bottom-right affix" data-fab-toggle="hover" id="fab-menu-affixed-demo-right">
        <li>
            <a class="fab-menu-btn btn bg-pink-300 btn-float btn-rounded btn-icon">
                <i class="fab-icon-open icon-grid3"></i>
                <i class="fab-icon-close icon-cross2"></i>
            </a>

            <ul class="fab-menu-inner">
                <li>
                    <div data-fab-label="הוסף ליד">
                        <a href="#" class="btn btn-default btn-rounded btn-icon btn-float" data-toggle="modal" data-target="#add-lead">
                            <i class="icon-plus3"></i>
                        </a>
                    </div>
                </li>
                <li>
                    <div data-fab-label="רענן טבלה">
                        <a href="#" class="btn btn-default btn-rounded btn-icon btn-float">
                            <i class="icon-reset"></i>
                        </a>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
    <!-- /Top right menu -->
    <div class="panel panel-flat">
        <div class="panel-heading">
            <h5 class="panel-title">רשימת לידים
                <a class="heading-elements-toggle">
                    <i class="icon-more"></i>
                </a>
            </h5>
            <div class="heading-elements">
                <ul class="icons-list">
                    <li>
                        <a data-action="collapse"></a>
                    </li>
                    <li>
                        <a data-action="reload"></a>
                    </li>
                    <li>
                        <a data-action="close"></a>
                    </li>
                </ul>
            </div>
        </div>

        <table class="table dataTable datatable-autofill-column">
            <thead>
                <tr>
                    <th></th>
                    <th>שם פרטי</th>
                    <th>שם משפחה</th>
                    <th>אימייל</th>
                    <th>טלפון</th>
                    <th>פעולות</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>

    <!-- Footer -->
    @yield('footer')
    <!-- /footer -->

</div>
</div>
<!-- /content area -->

<!-- add lead -->
<div id="add-lead" class="modal fade in">
<div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div class="modal-header bg-primary">
            <button type="button" class="close" data-dismiss="modal">×</button>
            <h5 class="modal-title">הוסף ליד</h5>
        </div>

        <form action="#">
            <div class="modal-body">
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-12">
                            <label>שם פרטי</label>
                            <input type="text" name="first_name" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-12">
                        <label>שם משפחה</label>
                        <input type="text" name="last_name" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-12">
                            <label>אימייל</label>
                            <input type="text" name="email" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-12">
                            <label>פלאפון</label>
                            <input type="text" name="phone" class="form-control">
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Submit form</button>
            </div>
        </form>
    </div>
</div>
<!-- /add lead -->
</div>
@endsection