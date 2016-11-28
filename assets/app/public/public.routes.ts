import { Routes } from "@angular/router";

// Public Child Routes
import { p404Component }                from './p404.component';
import { e500Component }                from './e500.component';
import { LoginComponent }               from './login.component';
import { RegisterComponent }            from './register.component';
import { HomeComponent }                from './home.component';
import { BenefitsComponent }            from './benefits.component';
import { ServicesComponent }            from './services.component';
import { EducationComponent }           from './education.component';
import { ProductsComponent }            from './products.component';
import { FcraComponent }                from './fcra.component';
import { CroaComponent }                from './croa.component';
import { BuildingComponent }            from './building.component';
import { TipsComponent }                from './tips.component';
import { MaintenanceComponent }         from './maintenance.component';

export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'p404', component: p404Component },
    { path: 'e500', component: e500Component },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'benefits', component: BenefitsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'education', component: EducationComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'fcra', component: FcraComponent },
    { path: 'croa', component: CroaComponent },
    { path: 'building', component: BuildingComponent },
    { path: 'tips', component: TipsComponent },
    { path: 'maintenance', component: MaintenanceComponent }
];
