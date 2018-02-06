@extends('layouts.app')
@include('templates.app.footer')

@section('js')
<script type="text/javascript" src="{{ asset('js/theme/plugins/visualization/d3/d3.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/visualization/d3/d3_tooltip.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/forms/styling/switchery.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/forms/styling/uniform.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/forms/selects/bootstrap_multiselect.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/ui/moment/moment.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/theme/plugins/pickers/daterangepicker.js') }}"></script>

<script type="text/javascript" src="{{ asset('js/theme/core/app.js') }}"></script>
<!-- <script type="text/javascript" src="{{ asset('js/theme/pages/dashboard.js') }}"></script> -->
<script type="text/javascript" src="{{ asset('js/theme/pages/general_widgets_stats.js')}}"></script>
@endsection

@section('content')
<!-- Page header -->
<div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4><i class="icon-arrow-right6 position-left"></i> <span class="text-semibold">דף הבית</span> - פאנל ניהול</h4>
        </div>

        <div class="heading-elements">
            <div class="heading-btn-group">
                <a href="#" class="btn btn-link btn-float has-text"><i class="icon-bars-alt text-primary"></i><span>סטטיסטיקה</span></a>
                <a href="#" class="btn btn-link btn-float has-text"><i class="icon-calculator text-primary"></i> <span>חשבוניות</span></a>
                <a href="#" class="btn btn-link btn-float has-text"><i class="icon-calendar5 text-primary"></i> <span>לו"ז</span></a>
            </div>
        </div>
    </div>

    <div class="breadcrumb-line">
        <ul class="breadcrumb">
            <li><a href="{{ route('home') }}"><i class="icon-home2 position-left"></i> דף הבית</a></li>
            <li class="active">פאנל ניהול</li>
        </ul>

        <ul class="breadcrumb-elements">
            <li><a href="#"><i class="icon-comment-discussion position-left"></i> תמיכה</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="icon-gear position-left"></i>
                    הגדרות
                    <span class="caret"></span>
                </a>

                <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-user-lock"></i> אבטחת משתמש</a></li>
                    <li><a href="#"><i class="icon-statistics"></i> אנליזות</a></li>
                    <li><a href="#"><i class="icon-accessibility"></i> נגישות</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-gear"></i> הגדרות</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
<!-- /page header -->


<!-- Content area -->
<div class="content">

    <!-- Main charts -->
    <div class="row">
     
    </div>
    <!-- /main charts -->


    <!-- Dashboard content -->
    <div class="row">
        <!-- OPTION 1-->
        <div class="row">
            <div class="col-sm-6 col-md-3">
                <div class="panel panel-body bg-blue-400 has-bg-image">
                    <div class="media no-margin-top content-group">
                        <div class="media-body">
                            <h6 class="no-margin text-semibold">Server maintenance</h6>
                            <span class="text-muted">Until 1st of June</span>
                        </div>

                        <div class="media-right media-middle">
                            <i class="icon-cog3 icon-2x"></i>
                        </div>
                    </div>

                    <div class="progress progress-micro bg-blue mb-10">
                        <div class="progress-bar bg-white" style="width: 67%">
                            <span class="sr-only">67% Complete</span>
                        </div>
                    </div>
                    <span class="pull-right">67%</span>
                    Re-indexing
                </div>
            </div>

            <div class="col-sm-6 col-md-3">
                <div class="panel panel-body bg-danger-400 has-bg-image">
                    <div class="media no-margin-top content-group">
                        <div class="media-body">
                            <h6 class="no-margin text-semibold">Services status</h6>
                            <span class="text-muted">April, 19th</span>
                        </div>

                        <div class="media-right media-middle">
                            <i class="icon-pulse2 icon-2x"></i>
                        </div>
                    </div>

                    <div class="progress progress-micro mb-10 bg-danger">
                        <div class="progress-bar bg-white" style="width: 80%">
                            <span class="sr-only">80% Complete</span>
                        </div>
                    </div>
                    <span class="pull-right">80%</span>
                    Partly operational
                </div>
            </div>

            <div class="col-sm-6 col-md-3">
                <div class="panel panel-body bg-success-400 has-bg-image">
                    <div class="media no-margin-top content-group">
                        <div class="media-left media-middle">
                            <i class="icon-cog3 icon-2x"></i>
                        </div>

                        <div class="media-body">
                            <h6 class="no-margin text-semibold">Server maintenance</h6>
                            <span class="text-muted">Until 1st of June</span>
                        </div>
                    </div>

                    <div class="progress progress-micro mb-10 bg-success">
                        <div class="progress-bar bg-white" style="width: 67%">
                            <span class="sr-only">67% Complete</span>
                        </div>
                    </div>
                    <span class="pull-right">67%</span>
                    Re-indexing
                </div>
            </div>

            <div class="col-sm-6 col-md-3">
                <div class="panel panel-body bg-indigo-400 has-bg-image">
                    <div class="media no-margin-top content-group">
                        <div class="media-left media-middle">
                            <i class="icon-pulse2 icon-2x"></i>
                        </div>

                        <div class="media-body">
                            <h6 class="no-margin text-semibold">Services status</h6>
                            <span class="text-muted">April, 19th</span>
                        </div>
                    </div>

                    <div class="progress progress-micro mb-10 bg-indigo">
                        <div class="progress-bar bg-white" style="width: 80%">
                            <span class="sr-only">80% Complete</span>
                        </div>
                    </div>
                    <span class="pull-right">80%</span>
                    Partly operational
                </div>
            </div>
        </div>
        <!-- /OPTION 1 -->
        <!-- OPTION 2-->
        <div class="row">
            <div class="col-lg-3">

                <!-- Area chart in colored panel -->
                <div class="panel bg-indigo-400 has-bg-image" style="position: static; zoom: 1;">
                    <div class="panel-body">
                        <div class="heading-elements">
                            <ul class="icons-list">
                                <li><a data-action="reload"></a></li>
                            </ul>
                        </div>

                        <h3 class="no-margin text-semibold">$18,390</h3>
                        רווח יומי
                        <div class="text-muted text-size-small"> ממוצע $37,578</div>
                    </div>

                    <div id="chart_area_color"></div>
                </div>
                <!-- /area chart in colored panel -->

            </div>

            <div class="col-lg-3">

                <!-- Bar chart in colored panel -->
                <div class="panel bg-danger-400 has-bg-image">
                    <div class="panel-body">
                        <div class="heading-elements">
                            <span class="heading-text badge bg-danger-800">+53,6%</span>
                        </div>

                        <h3 class="no-margin text-semibold">3,450</h3>
                        Members online
                        <div class="text-muted text-size-small">489 avg</div>
                    </div>

                    <div class="container-fluid">
                        <div id="chart_bar_color"></div>
                    </div>
                </div>
                <!-- /bar chart in colored panel -->

            </div>

            <div class="col-lg-3">

                <!-- Line chart in colored panel -->
                <div class="panel bg-blue-400 has-bg-image">
                    <div class="panel-body">
                        <div class="heading-elements">
                            <ul class="icons-list">
                                <li><a data-action="reload"></a></li>
                            </ul>
                        </div>

                        <h3 class="no-margin text-semibold">4,389</h3>
                        Orders weekly
                        <div class="text-muted text-size-small">4,728 avg</div>
                    </div>

                    <div id="line_chart_color"></div>
                </div>
                <!-- /line chart in colored panel -->

            </div>

            <div class="col-lg-3">

                <!-- Sparklines in colored panel -->
                <div class="panel bg-success-400 has-bg-image">
                    <div class="panel-body">
                        <div class="heading-elements">
                            <ul class="icons-list">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="icon-cog3"></i>
                                        <span class="caret"></span>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="#"><i class="icon-sync"></i> Update data</a></li>
                                        <li><a href="#"><i class="icon-list-unordered"></i> Detailed log</a></li>
                                        <li><a href="#"><i class="icon-pie5"></i> Statistics</a></li>
                                        <li><a href="#"><i class="icon-cross3"></i> Clear list</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h3 class="no-margin text-semibold">49.4%</h3>
                        Current server load
                        <div class="text-muted text-size-small">34.6% avg</div>
                    </div>

                    <div id="sparklines_color"></div>
                </div>
                <!-- /sparklines in colored panel -->

            </div>
        </div>
        <!-- /OPTION 2 -->
        <!-- OPTION 3 -->
        <div class="row">
            <div class="col-md-3">

                <!-- Orders processed -->
                <div class="panel panel-body text-center bg-teal-400 has-bg-image">
                    <div class="svg-center position-relative" id="progress_icon_three"><i class="icon-bag counter-icon" style="color: rgb(255, 255, 255); top: 26px;"></i></div>
                    <h2 class="mt-15 mb-5">73%</h2>

                    Orders processed
                    <div class="text-size-small opacity-75">83 orders pending</div>
                </div>
                <!-- /orders processed -->

            </div>
            <div class="col-md-3">

                <!-- Order shipped -->
                <div class="panel panel-body text-center bg-purple-400 has-bg-image">
                    <div class="svg-center position-relative" id="progress_icon_four"><i class="icon-truck counter-icon" style="color: rgb(255, 255, 255); top: 26px;"></i></div>
                    <h2 class="mt-15 mb-5">49%</h2>

                    Orders shipped
                    <div class="text-size-small opacity-75">92 orders pending</div>
                </div>
                <!-- /orders shipped -->

            </div>
            <div class="col-md-3">

                <!-- Invitation stats colored -->
                <div class="panel text-center bg-blue-400 has-bg-image">
                    <div class="panel-body">
                        <h6 class="text-semibold no-margin-bottom mt-5">Invitation statistics</h6>
                        <div class="opacity-75 content-group">539 invites sent</div>
                        <div class="svg-center position-relative mb-5" id="progress_percentage_three"></div>
                    </div>

                    <div class="panel-body panel-body-accent pb-15">
                        <div class="row">
                            <div class="col-xs-4">
                                <div class="text-uppercase text-size-mini opacity-75">Accepted</div>
                                <h5 class="text-semibold no-margin">2,483</h5>
                            </div>

                            <div class="col-xs-4">
                                <div class="text-uppercase text-size-mini opacity-75">Declined</div>
                                <h5 class="text-semibold no-margin">1,257</h5>
                            </div>

                            <div class="col-xs-4">
                                <div class="text-uppercase text-size-mini opacity-75">Pending</div>
                                <h5 class="text-semibold no-margin">8,472</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /invitation stats colored -->

            </div>
            <div class="col-md-3">

                <!-- Tickets stats colored -->
                <div class="panel text-center bg-danger-400 has-bg-image">
                    <div class="panel-body">
                        <h6 class="text-semibold no-margin-bottom mt-5">Tickets statistics</h6>
                        <div class="opacity-75 content-group">893 tickets in total</div>
                        <div class="svg-center position-relative mb-5" id="progress_percentage_four"></div>
                    </div>

                    <div class="panel-body panel-body-accent pb-15">
                        <div class="row">
                            <div class="col-xs-4">
                                <div class="text-uppercase text-size-mini text-muted">Raised</div>
                                <h5 class="text-semibold no-margin">5,328</h5>
                            </div>

                            <div class="col-xs-4">
                                <div class="text-uppercase text-size-mini text-muted">Pending</div>
                                <h5 class="text-semibold no-margin">2,348</h5>
                            </div>

                            <div class="col-xs-4">
                                <div class="text-uppercase text-size-mini text-muted">Closed</div>
                                <h5 class="text-semibold no-margin">4,357</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /tickets stats colored -->

            </div>
        </div>
    </div> 
    <!-- /dashboard content -->

    <!-- Footer -->
    @yield('footer')
    <!-- /footer -->

    </div>
</div>
<!-- /content area -->
@endsection
