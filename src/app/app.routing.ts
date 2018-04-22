import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { USER_ROUTES } from './home/home.routing';
// import { LoginGuard } from './shared/guards/login.guard';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: USER_ROUTES,
        // canActivate: [LoginGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
    // {
    //     path: '',
    //     redirectTo: '/product/list',
    //     pathMatch: 'full'
    // }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
