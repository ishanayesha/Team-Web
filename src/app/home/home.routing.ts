import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { TeamComponent } from './team/team.component'
import { ProfileComponent } from './profile/profile.component'

import { AllIssuesComponent } from './issues/all-issues/all-issues.component'
import { MyIssuesComponent } from './issues/my-issues/my-issues.component'
import { OngoingIssuesComponent } from './issues/ongoing-issues/ongoing-issues.component'

import { AllAllocationsComponent } from './allocations/all-allocations/all-allocations.component'
import { MyAllocationComponent } from './allocations/my-allocation/my-allocation.component'

import { LeaveComponent } from './leave/leave/leave.component'
import { LeaveSheetComponent } from './leave/leave-sheet/leave-sheet.component'

export const USER_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'leave',
        component: LeaveComponent
    },
    {
        path: 'leave-sheet',
        component: LeaveSheetComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'all-issues',
        component: AllIssuesComponent
    },
    {
        path: 'my-issues',
        component: MyIssuesComponent
    },
    {
        path: 'ongoing-issues',
        component: OngoingIssuesComponent
    },
    {
        path: 'all-allocations',
        component: AllAllocationsComponent
    },
    {
        path: 'my-allocations',
        component: MyAllocationComponent
    },
];
