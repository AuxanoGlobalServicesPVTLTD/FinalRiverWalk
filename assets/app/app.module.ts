// Angular Imports
import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule }                       from "@angular/http";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Routing for root level
import { routing }                          from "./app.routing";

// Libraries
import { Ng2BootstrapModule }               from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule }                     from 'ng2-charts/ng2-charts';

// Directives
import { NAV_DROPDOWN_DIRECTIVES }          from './directives/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES }        from './directives/sidebar.directive';
import { AsideToggleDirective }             from './directives/aside.directive';

// Services
import { Guard }                            from "./services/guard.service";
import { Auth }                             from "./services/auth.service";

// ***** Components *****
import { AppComponent }                     from "./app.component";

//Layouts
import { PublicComponent }                  from './layouts/public.component';
import { SecureComponent }                  from './layouts/secure.component';
import { HeaderComponent }                  from './layouts/header.component';
import { BreadcrumbsComponent }             from './layouts/breadcrumb.component';
import { SidebarComponent }                 from './layouts/sidebar.component';
import { AsideComponent }                   from './layouts/aside.component';

// Public Pages
import { p404Component }                    from './public/p404.component';
import { e500Component }                    from './public/e500.component';
import { LoginComponent }                   from './public/login.component';
import { RegisterComponent }                from './public/register.component';
import { HomeComponent }                    from './public/home.component';
import { BenefitsComponent }                from './public/benefits.component';
import { ServicesComponent }                from './public/services.component';
import { ProductsComponent }                from './public/products.component';
import { EducationComponent }               from './public/education.component';
import { FcraComponent }                    from './public/fcra.component';
import { CroaComponent }                    from './public/croa.component';
import { BuildingComponent }                from './public/building.component';
import { TipsComponent }                    from './public/tips.component';
import { MaintenanceComponent }             from './public/maintenance.component';

// Secure Pages 
import { ItemsComponent }                   from './secure/items.component';
import { OverviewComponent }                from './secure/overview.component';
import { ProfileComponent }                 from './secure/profile.component';
import { RecommendationsComponent }         from './secure/recommendations.component';
import { ReportsComponent }                 from './secure/reports.component';
import { ScoreSimulatorComponent }          from './secure/score-simulator.component';
import { PaymentMethodComponent }           from './secure/payment-method.component';
import { LockAccountComponent }             from './secure/lock-account.component';

@NgModule({
    declarations: [
        AppComponent,
        PublicComponent,
        SecureComponent,
        p404Component,
        e500Component,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        BenefitsComponent,
        ServicesComponent,
        ProductsComponent,
        EducationComponent,
        FcraComponent,
        CroaComponent,
        BuildingComponent,
        TipsComponent,
        MaintenanceComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        NAV_DROPDOWN_DIRECTIVES,
        AsideToggleDirective,
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        AsideComponent,
        ItemsComponent,
        OverviewComponent,
        ProfileComponent,
        RecommendationsComponent,
        ReportsComponent,
        ScoreSimulatorComponent,
        PaymentMethodComponent,
        LockAccountComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule,
        Ng2BootstrapModule,
        ChartsModule
    ],
    providers: [ 
    Guard,
    Auth
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}