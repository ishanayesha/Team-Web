import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'

//modules
import { CountDown } from "ng4-date-countdown-timer";

//routes
import { Routing } from './app.routing';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AllIssuesComponent } from './home/issues/all-issues/all-issues.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { SidebarComponent } from './home/components/sidebar/sidebar.component';
import { TeamComponent } from './home/team/team.component';
import { LeaveComponent } from './home/leave/leave/leave.component';
import { ProfileComponent } from './home/profile/profile.component';
import { MyAllocationComponent } from './home/allocations/my-allocation/my-allocation.component';
import { AllAllocationsComponent } from './home/allocations/all-allocations/all-allocations.component';
import { MyIssuesComponent } from './home/issues/my-issues/my-issues.component';
import { OngoingIssuesComponent } from './home/issues/ongoing-issues/ongoing-issues.component';
import { LeaveSheetComponent } from './home/leave/leave-sheet/leave-sheet.component';

//charts
import { PieChartComponent } from './home/components/charts/pie-chart/pie-chart.component';
import { TimelineChartComponent } from './home/components/charts/timeline-chart/timeline-chart.component';

//services
//charts
import { GooglePieChartService } from './shared/services/google-charts/google-pie-chart.service';
import { GoogleChartsBaseService } from './shared/services/google-charts/google-charts-base.service';
import { GoogleTimelineChartService } from './shared/services/google-charts/google-timeline-chart.service';

//user service
import { UserService } from './shared/services/user.service';

//leave service
import { LeaveService } from './shared/services/leave.service';

//issue service
import { IssueService } from './shared/services/issue.service';

//allocation service
import { AllocationService } from './shared/services/allocation.service';

//error handler service
import { ErrorHandlerService } from './shared/services/error-handler.service';

//dashboard service
import { DashboardService } from './shared/services/dashboard.service';

//auth
import { AuthService } from './shared/services/auth.service';

//guards
import { AuthGuard } from './shared/guards/auth.guard';

//pipes
import { IssuesSearchFilter } from './shared/pipes/issues-search.pipe';
import { SortIssuesPipe } from './shared/pipes/sort-issues.pipe';
import { MembersSearchPipe } from './shared/pipes/members-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountDown,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    AllIssuesComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    TeamComponent,
    LeaveComponent,
    PieChartComponent,
    ProfileComponent,
    TimelineChartComponent,
    MyAllocationComponent,
    AllAllocationsComponent,
    MyIssuesComponent,
    OngoingIssuesComponent,
    LeaveSheetComponent,
    IssuesSearchFilter,
    SortIssuesPipe,
    MembersSearchPipe
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GooglePieChartService,
    GoogleChartsBaseService,
    GoogleTimelineChartService,
    AuthGuard,
    AuthService,
    UserService,
    LeaveService,
    IssueService,
    AllocationService,
    DashboardService,
    ErrorHandlerService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
