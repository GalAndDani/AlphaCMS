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

            <!-- Simple login form -->
            <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                {{ csrf_field() }}
                <div class="panel panel-body login-form">
                    <div class="text-center">
                        <div class="icon-object border-slate-300 text-slate-300"><i class="icon-reading"></i></div>
                        <h5 class="content-group">הכנס למשתמש שלך <small class="display-block">הכנס את פרטייך למטה</small></h5>
                    </div>

                    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }} has-feedback has-feedback-left">
                        <input id="email" type="email" class="form-control" placeholder="אימייל" name="email" value="{{ old('email') }}" required autofocus>
                        <div class="form-control-feedback">
                            <i class="icon-user text-muted"></i>
                        </div>
                        @if ($errors->has('email'))
                            <span class="help-block">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>
                    

                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }} has-feedback has-feedback-left">
                        <input id="password" type="password" class="form-control" name="password" placeholder="סיסמא" required>
                        <div class="form-control-feedback">
                            <i class="icon-lock2 text-muted"></i>
                        </div>

                        @if ($errors->has('password'))
                            <span class="help-block">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </div>

                    <div class="form-group login-options">
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="checkbox-inline">
                                    <div class="checker"><span class="checked"><input type="checkbox" class="styled" checked="checked" name="remember" {{ old('remember') ? 'checked' : '' }}></span></div>
                                    זכור אותי
                                </label>
                            </div>

                            <div class="col-sm-6 text-right" id="forgot-password-holder">
                                <a href="{{ route('password.request') }}">שכחתי סיסמא</a>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">כניסה <i class="icon-circle-left2 position-right"></i></button>
                    </div>
                </div>
            </form>
            <!-- /simple login form -->


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
