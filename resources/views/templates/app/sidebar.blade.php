@section('sidebar')
<!-- Main sidebar -->
<div class="sidebar sidebar-main">
    <div class="sidebar-content">

        <!-- User menu -->
        <div class="sidebar-user">
            <div class="category-content">
                <div class="media">
                    <a href="#" class="media-left"><img src="{{ asset('images/avatar-placeholder.png')}}" class="img-circle img-sm" alt=""></a>
                    <div class="media-body">
                        <span class="media-heading text-semibold">{{ Auth::user()->name }}</span>
                        <div class="text-size-mini text-muted">
                        <span class="label bg-success">מחובר</span>
                        </div>
                    </div>

                    <div class="media-right media-middle">
                        <ul class="icons-list">
                            <li>
                                <a href="#"><i class="icon-cog3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- /user menu -->


        <!-- Main navigation -->
        <div class="sidebar-category sidebar-category-visible">
            <div class="category-content no-padding">
                <ul class="navigation navigation-main navigation-accordion">

                    <!-- Main -->
                    <li class="navigation-header"><span>ראשי</span> <i class="icon-menu" title="Main pages"></i></li>
                    <li class="active"><a href="{{ route('home') }}"><i class="icon-home4"></i> <span>פאנל ניהול</span></a></li>
                    <li>
                        <a href="#"><i class="icon-stack2"></i> <span>דוגמא תפריט נפתח</span></a>
                        <ul>
                            <li><a href="#">אפשרות 1</a></li>
                            <li><a href="#">אפשרות 2</a></li>
                            <li class="navigation-divider"></li>
                            <li><a href="#">אפשרות 3</a></li>
                        </ul>
                    </li>
                    <li class="navigation-header"><span>ניוזלטר</span> <i class="icon-menu" title="Main pages"></i></li>
                    <li><a href="{{ route('home') }}"><i class="icon-envelop"></i> <span>תבניות מייל</span></a></li>
                    <li class="navigation-header"><span>SEO - קידום אתר</span> <i class="icon-menu" title="Main pages"></i></li>
                    <li><a href="{{ route('home') }}"><i class="icon-embed"></i> <span>תגיות מטה</span></a></li>
                </ul>
            </div>
        </div>
        <!-- /main navigation -->

    </div>
</div>
<!-- /main sidebar -->

@endesection