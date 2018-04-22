import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { IssuesComponent } from './issues/issues.component'

export const USER_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'issues',
        component: IssuesComponent
    }
];
