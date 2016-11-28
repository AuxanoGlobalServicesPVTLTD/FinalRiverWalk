import { Routes } from "@angular/router";

import { ItemsComponent }                   from './items.component';
import { OverviewComponent }                from './overview.component';
import { ProfileComponent }                 from './profile.component';
import { RecommendationsComponent }         from './recommendations.component';
import { ReportsComponent }                 from './reports.component';
import { ScoreSimulatorComponent }          from './score-simulator.component';
import { PaymentMethodComponent }           from './payment-method.component';
import { LockAccountComponent }          	from './lock-account.component';

export const SECURE_ROUTES: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'items', component: ItemsComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'recommendations', component: RecommendationsComponent },
    { path: 'score-simulator', component: ScoreSimulatorComponent },
    { path: 'payment-method', component: PaymentMethodComponent },
    { path: 'lock-account', component: LockAccountComponent }
];
