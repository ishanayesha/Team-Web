import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { TeamComponent } from './team/team.component'
import { IssuesComponent } from './issues/issues.component'
import { LeaveComponent } from './leave/leave.component'

export const USER_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'issues',
        component: IssuesComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'leave',
        component: LeaveComponent
    }
];
