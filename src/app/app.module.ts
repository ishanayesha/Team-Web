import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//modules
import {CountDown} from "ng4-date-countdown-timer";

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

//charts
import { PieChartComponent } from './home/components/charts/pie-chart/pie-chart.component';
import { TimelineChartComponent } from './home/components/charts/timeline-chart/timeline-chart.component';

//services
import { GooglePieChartService } from './shared/services/google-pie-chart.service';
import { GoogleChartsBaseService } from './shared/services/google-charts-base.service';
import { GoogleTimelineChartService } from './shared/services/google-timeline-chart.service';
import { MyAllocationComponent } from './home/allocations/my-allocation/my-allocation.component';
import { AllAllocationsComponent } from './home/allocations/all-allocations/all-allocations.component';
import { MyIssuesComponent } from './home/issues/my-issues/my-issues.component';
import { OngoingIssuesComponent } from './home/issues/ongoing-issues/ongoing-issues.component';
import { LeaveSheetComponent } from './home/leave/leave-sheet/leave-sheet.component';
// import { AllocationsComponent } from './home/allocations/allocations.component';
// import { MyIssuesComponent } from './home/my-issues/my-issues.component';


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
    // AllocationsComponent,
    // MyIssuesComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule
  ],
  providers: [
    GooglePieChartService,
    GoogleChartsBaseService,
    GoogleTimelineChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
