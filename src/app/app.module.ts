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

//services
import { GooglePieChartService } from './shared/services/google-pie-chart.service';
import { GoogleChartsBaseService } from './shared/services/google-charts-base.service';
import { PieChartComponent } from './home/dashboard/pie-chart/pie-chart.component';


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
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [
    GooglePieChartService,
    GoogleChartsBaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
