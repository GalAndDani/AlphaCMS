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

            <!-- Password recovery -->
            <form class="form-horizontal" method="POST" action="{{ route('password.email') }}">
                        {{ csrf_field() }}
                <div class="panel panel-body login-form">
                    <div class="text-center">
                        <div class="icon-object border-warning text-warning"><i class="icon-spinner11"></i></div>
                        <h5 class="content-group">שחזור סיסמא <small class="display-block">אנו נשלח הוראות מדויקות לאימייל שלך</small></h5>
                    </div>

                    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }} has-feedback">
                        <input class="form-control" id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required placeholder="אימייל">
                        <div class="form-control-feedback">
                            <i class="icon-mail5 text-muted"></i>
                        </div>

                        @if ($errors->has('email'))
                            <span class="help-block text-danger">
                                <i class="icon-cancel-circle2 position-left"></i><strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>

                    <button type="submit" class="btn bg-blue btn-block">שחזר סיסמא <i class="icon-arrow-left13 position-right"></i></button>
                </div>
            </form>
            <!-- /password recovery -->


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
