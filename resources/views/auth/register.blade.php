@extends('layouts.guest')
@include('templates.guest.footer')
@section('content')
<!-- Page container -->
<div class="page-container">

<!-- Page content -->
<div class="page-content">

    <!-- Main content -->
    <div class="content-wrapper">

        <!-- Content area -->
        <div class="content">

            <!-- Advanced login -->
            <form class="form-horizontal" method="POST" action="{{ route('register') }}">
            {{ csrf_field() }}
                <div class="panel panel-body login-form">
                    <div class="text-center">
                        <div class="icon-object border-success text-success"><i class="icon-plus3"></i></div>
                        <h5 class="content-group">צור משתמש <small class="display-block">כל השדות דרושים</small></h5>
                    </div>

                    <div class="content-divider text-muted form-group"><span>פרטי משתמש</span></div>

                    <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }} has-feedback has-feedback-left">
                        <input id="name" type="text" class="form-control" placeholder="שם מלא" name="name" value="{{ old('name') }}" required autofocus>
                        <div class="form-control-feedback">
                            <i class="icon-user-check text-muted"></i>
                        </div>

                        @if ($errors->has('name'))
                            <span class="help-block text-danger">
                                <i class="icon-cancel-circle2 position-left"></i><strong>{{ $errors->first('name') }}</strong>
                            </span>
                        @endif
                        
                    </div>
                    
                    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }} has-feedback has-feedback-left">
                        <div class="form-control-feedback">
                            <i class="icon-mention text-muted"></i>
                        </div>
                        <input id="email" type="email" class="form-control" placeholder="אימייל" name="email" value="{{ old('email') }}" required>

                        @if ($errors->has('email'))
                            <span class="help-block text-danger">
                                <i class="icon-cancel-circle2 position-left"></i><strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>

                    
                    <div class="content-divider text-muted form-group"><span>הפרטיות שלך</span></div>
                    
                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }} has-feedback has-feedback-left">
                        <input id="password" type="password" placeholder="צור סיסמא" class="form-control" name="password" required>
                        <div class="form-control-feedback">
                            <i class="icon-user-lock text-muted"></i>
                        </div>

                        @if ($errors->has('password'))
                            <span class="help-block text-danger">
                                <i class="icon-cancel-circle2 position-left"></i><strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </div>
                    
                    <div class="form-group has-feedback has-feedback-left">
                        <input id="password-confirm" type="password" placeholder="חזור על הסיסמא" class="form-control" name="password_confirmation" required>
                        <div class="form-control-feedback">
                            <i class="icon-user-lock text-muted"></i>
                        </div>
                    </div>

                    <button type="submit" class="btn bg-teal btn-block btn-lg">הרשם <i class="icon-circle-left2 position-right"></i></button>
                </div>
            </form>
            <!-- /advanced login -->


            <!-- Footer -->
            @yield('footer')
            <!-- /footer -->

        </div>
        <!-- /content area -->

    </div>
    <!-- /main content -->

</div>
<!-- /page content -->

</div>
<!-- /page container -->
@endsection
