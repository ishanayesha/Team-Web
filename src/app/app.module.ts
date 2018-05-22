import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import { Routing } from './app.routing';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { IssuesComponent } from './home/issues/issues.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { SidebarComponent } from './home/components/sidebar/sidebar.component';
import { TeamComponent } from './home/team/team.component';
import { LeaveComponent } from './home/leave/leave.component';
import { ProfileComponent } from './home/profile/profile.component';

//charts
import { PieChartComponent } from './home/components/charts/pie-chart/pie-chart.component';
import { TimelineChartComponent } from './home/components/charts/timeline-chart/timeline-chart.component';

//services
import { GooglePieChartService } from './shared/services/google-pie-chart.service';
import { GoogleChartsBaseService } from './shared/services/google-charts-base.service';
import { GoogleTimelineChartService } from './shared/services/google-timeline-chart.service';
import { MyAllocationComponent } from './home/my-allocation/my-allocation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    IssuesComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    TeamComponent,
    LeaveComponent,
    PieChartComponent,
    ProfileComponent,
    TimelineChartComponent,
    MyAllocationComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [
    GooglePieChartService,
    GoogleChartsBaseService,
    GoogleTimelineChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
