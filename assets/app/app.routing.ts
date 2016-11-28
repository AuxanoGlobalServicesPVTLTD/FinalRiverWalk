import { Routes, RouterModule } 	from "@angular/router";

import {Guard}                      from "./services/guard.service";

//Layouts
import { PublicComponent }    		from './layouts/public.component';
import { SecureComponent }    		from './layouts/secure.component';

import { PUBLIC_ROUTES }            from "./public/public.routes";
import { SECURE_ROUTES }            from "./secure/secure.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', },
    { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
    { path: '', component: SecureComponent, canActivate: [Guard], data: { title: 'Secure Views' }, children: SECURE_ROUTES }
];



export const routing = RouterModule.forRoot(APP_ROUTES);