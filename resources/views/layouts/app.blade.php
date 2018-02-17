<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="rtl">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

	<!-- Global stylesheets -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
	<link href="{{ asset('css/theme/icons/icomoon/styles.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('css/theme/bootstrap.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('css/theme/core.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('css/theme/components.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('css/theme/colors.css') }}" rel="stylesheet" type="text/css">
	<!-- /global stylesheets -->

	<script>
        window.config = {!! json_encode([
            'csrf' => csrf_token(),
            'base_url' => asset(''),
            'host_name' => Request::server('HTTP_HOST'),
            'user' => [
                'name' => Auth::user()->name,
                'id' => Auth::user()->id,
            ],
            'timezone' => config('app.timezone'),
        ]) !!};
    </script>
    
</head>

<body class="has-detached-left">
    <!-- Main navbar -->
	<div class="navbar navbar-inverse">
		<div class="navbar-header">
			<a class="navbar-brand" href="{{ route('home') }}">{{ config('app.name', 'Laravel') }}</a>

			<ul class="nav navbar-nav visible-xs-block">
				<li><a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5"></i></a></li>
				<li><a class="sidebar-mobile-main-toggle"><i class="icon-paragraph-justify3"></i></a></li>
			</ul>
		</div>

		<div class="navbar-collapse collapse" id="navbar-mobile">
			<ul class="nav navbar-nav">
				<li><a class="sidebar-control sidebar-main-toggle hidden-xs"><i class="icon-paragraph-justify3"></i></a></li>

				
			</ul>

			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown language-switch">
					@include('templates.app.lang')

					@yield('lang')
				</li>

				<li class="dropdown">
					@include('templates.app.messages')

					@yield('messages')
				</li>

				<li class="dropdown dropdown-user">
					<a class="dropdown-toggle" data-toggle="dropdown">
						<img src="{{ asset('images/avatar-placeholder.png')}}" alt="">
					
						<i class="caret"></i>
					</a>

					<ul class="dropdown-menu dropdown-menu-right">
						<li><a href="{{ route('profile') }}"><i class="icon-user-plus"></i> הפרופיל שלי</a></li>
						<!-- <li><a href="#"><i class="icon-coins"></i> My balance</a></li> -->
						<li><a href="#"><span class="badge bg-teal-400 pull-right">0</span> <i class="icon-comment-discussion"></i> הודעות</a></li>
						<li class="divider"></li>
						<li><a href="#"><i class="icon-cog5"></i> הגדרות משתמש</a></li>
						<li><a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"><i class="icon-switch2"></i> התנתק</a></li>
						<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
							{{ csrf_field() }}
						</form>
					</ul>
				</li>
			</ul>
		</div>
	</div>
    <!-- /main navbar -->
	
	<!-- Page container -->
	<div class="page-container">

		<!-- Page content -->
		<div class="page-content">
			@include('templates.app.sidebar')

			@yield('sidebar')

			<!-- Main content -->
			<div class="content-wrapper">

				@yield('content')

			</div>
			<!-- /main content -->

		</div>
		<!-- /page content -->

	</div>
	<!-- /page container -->
        

    <!-- Core JS files -->
	<script type="text/javascript" src="{{ asset('js/theme/plugins/loaders/pace.min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/theme/core/libraries/jquery.min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/theme/core/libraries/bootstrap.min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/theme/plugins/loaders/blockui.min.js') }}"></script>
	<!-- /core JS files -->

	<!-- Theme JS files -->
	@yield('js')
    <!-- /theme JS files -->
	
    <!-- Scripts -->
    <!-- <script src="{{ asset('js/app.js') }}"></script> -->
</body>
</html>
