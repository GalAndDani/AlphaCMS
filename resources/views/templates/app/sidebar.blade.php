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
                    <li class="navigation-header"><span>ניהול אתר</span> <i class="icon-menu" title="Main pages"></i></li>
                    <li class="active"><a href="{{ route('home') }}"><i class="icon-home4"></i> <span>פאנל ניהול</span></a></li>
                    <li>
                        <a href="#"><i class="icon-stack"></i> <span>דפי תוכן</span></a>
                        <ul>
                            <li><a href="#">אפשרות 1</a></li>
                            <li><a href="#">אפשרות 2</a></li>
                            <li class="navigation-divider"></li>
                            <li><a href="#">אפשרות 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="icon-blog"></i> <span>בלוג</span></a>
                        <ul>
                            <li><a href="#">אפשרות 1</a></li>
                            <li><a href="#">אפשרות 2</a></li>
                            <li class="navigation-divider"></li>
                            <li><a href="#">אפשרות 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="icon-images3"></i> <span>גלריה</span></a>
                        <ul>
                            <li><a href="#">אפשרות 1</a></li>
                            <li><a href="#">אפשרות 2</a></li>
                            <li class="navigation-divider"></li>
                            <li><a href="#">אפשרות 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="icon-accessibility"></i> <span> נגישות</span></a>
                        <ul>
                            <li><a href="#">תוסף נגישות</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="icon-embed"></i> <span>SEO - קידום אתר</span></a>
                        <ul>
                            <li><a href="#">תגיות מטה</a></li>
                            <li><a href="#">Friendly URLs</a></li>
                        </ul>
                    </li>
                    @if(env('APP_WEBTYPE') == 'ECOMMERCE')
                        <li class="navigation-header"><span>מסחר אלטקרוני</span> <i class="icon-menu" title="Main pages"></i></li>
                        <li>
                            <a href="#"><i class="icon-truck"></i> <span>ניהול הזמנות</span></a>
                            <ul>
                                <li><a href="#">תגיות מטה</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="icon-cube2"></i> <span>ניהול מוצרים</span></a>
                            <ul>
                                <li><a href="#">תגיות מטה</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="icon-credit-card2"></i> <span>סליקת אשראי</span></a>
                            <ul>
                                <li><a href="#">תבניות מייל</a></li>
                            </ul>
                        </li>
                    @endif
                    <li class="navigation-header"><span>מרקטינג ושיווק</span> <i class="icon-menu" title="Main pages"></i></li>
                    <li>
                        <a href="#"><i class="icon-envelop"></i> <span>רשימת תפוצה</span></a>
                        <ul>
                            <li><a href="#">תבניות מייל</a></li>
                            <li><a href="#">ניהול קמפיינים</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="icon-users2"></i> <span>ניהול לידים</span></a>
                        <ul>
                            <li><a href="#">רשימת לידים</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="icon-code"></i> <span>הגדרת פיקסלים</span></a>
                        <ul>
                            <li><a href="#">רשימת לידים</a></li>
                        </ul>
                    </li>
                    <li class="navigation-header"><span>הגדרות כלליות</span> <i class="icon-menu" title="Main pages"></i></li>
                    <li>
                        <a href="#"><i class="icon-users2"></i> <span> ניהול משתמשי מערכת</span></a>
                        <ul>
                            <li><a href="#">תבניות מייל</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /main navigation -->

    </div>
</div>
<!-- /main sidebar -->

@endesection