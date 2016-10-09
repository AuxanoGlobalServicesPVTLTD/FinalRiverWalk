import { Routes, RouterModule }         from '@angular/router';

//Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';
import { SimpleLayoutComponent }        from './layouts/simple-layout.component';

//Main view
import { DashboardComponent }           from './dashboard/dashboard.component';

//Components
import { ButtonsComponent }             from './components/buttons.component';
import { CardsComponent }               from './components/cards.component';
import { FormsComponent }               from './components/forms.component';
import { SocialButtonsComponent }       from './components/social-buttons.component';
import { SwitchesComponent }            from './components/switches.component';
import { TablesComponent }              from './components/tables.component';

//Icons
import { FontAwesomeComponent }         from './icons/font-awesome.component';
import { SimpleLineIconsComponent }     from './icons/simple-line-icons.component';

//Widgets
import { WidgetsComponent }             from './widgets/widgets.component';

//Charts
import { ChartsComponent }              from './charts/charts.component';

//Pages
import { p404Component }                from './pages/404.component';
import { p500Component }                from './pages/500.component';
import { LoginComponent }               from './pages/login.component';
import { RegisterComponent }            from './pages/register.component';
import { HomeComponent }                from './pages/home.component';
import { BenefitsComponent }            from './pages/benefits.component';
import { ServicesComponent }            from './pages/services.component';
import { EducationComponent }           from './pages/education.component';
import { ProductsComponent }            from './pages/products.component';
import { FcraComponent }                from './pages/fcra.component';
import { CroaComponent }                from './pages/croa.component';
import { BuildingComponent }            from './pages/building.component';
import { TipsComponent }                from './pages/tips.component';
import { MaintenanceComponent }         from './pages/maintenance.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    title: 'Dashboard'
                }
            },
            {
                path: 'components',
                redirectTo: 'components/buttons',
                pathMatch: 'full',
            },
            {
                path: 'components',
                data: {
                    title: 'Components'
                },
                children: [
                    {
                        path: 'buttons',
                        component: ButtonsComponent,
                        data: {
                            title: 'Buttons'
                        }
                    },
                    {
                        path: 'cards',
                        component: CardsComponent,
                        data: {
                            title: 'Cards'
                        }
                    },
                    {
                        path: 'forms',
                        component: FormsComponent,
                        data: {
                            title: 'Forms'
                        }
                    },
                    {
                        path: 'social-buttons',
                        component: SocialButtonsComponent,
                        data: {
                            title: 'Social buttons'
                        }
                    },
                    {
                        path: 'switches',
                        component: SwitchesComponent,
                        data: {
                            title: 'Switches'
                        }
                    },
                    {
                        path: 'tables',
                        component: TablesComponent,
                        data: {
                            title: 'Tables'
                        }
                    }
                ]
            },
            {
                path: 'icons',
                redirectTo: 'icons/font-awesome',
                pathMatch: 'full',
            },
            {
                path: 'icons',
                data: {
                    title: 'Icons'
                },
                children: [
                    {
                        path: 'font-awesome',
                        component: FontAwesomeComponent,
                        data: {
                            title: 'Font Awesome'
                        }
                    },
                    {
                        path: 'simple-line-icons',
                        component: SimpleLineIconsComponent,
                        data: {
                            title: 'Simple Line Icons'
                        }
                    }
                ]
            },
            {
                path: 'widgets',
                component: WidgetsComponent,
                data: {
                    title: 'Widgets'
                }
            },
            {
                path: 'charts',
                component: ChartsComponent,
                data: {
                    title: 'Charts'
                }
            }
        ]
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: 'home',
                component: HomeComponent,
                data: {
                    title: 'Home Page'
                }
            },
            {
                path: 'benefits',
                component: BenefitsComponent,
                data: {
                    title: 'Benefits Page'
                }
            },
            {
                path: 'services',
                component: ServicesComponent,
                data: {
                    title: 'Services Page'
                }
            },
            {
                path: 'education',
                component: EducationComponent,
                data: {
                    title: 'Education Page'
                }
            },
            {
                path: 'products',
                component: ProductsComponent,
                data: {
                    title: 'Products Page'
                }
            },
            {
                path: 'fcra',
                component: FcraComponent,
                data: {
                    title: 'FCRA'
                }
            },
            {
                path: 'croa',
                component: CroaComponent,
                data: {
                    title: 'CROA'
                }
            },
            {
                path: 'building',
                component: BuildingComponent,
                data: {
                    title: 'Education Building'
                }
            },
            {
                path: 'tips',
                component: TipsComponent,
                data: {
                    title: 'Education Tips'
                }
            },
            {
                path: 'maintenance',
                component: MaintenanceComponent,
                data: {
                    title: 'Education Maintenance'
                }
            },
            {
                path: '404',
                component: p404Component,
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: p500Component,
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);
