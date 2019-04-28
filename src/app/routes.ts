import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembershipHomeComponent } from './membership/membership-home/membership-home.component';
import { MembershipManageComponent } from './membership/membership-manage/membership-manage.component';
import { RegisterComponent } from './register/register.component';
import { MembershipJoinComponent } from './membership/membership-join/membership-join.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'membership/home', component: MembershipHomeComponent},
    {path: 'membership/join', component: MembershipJoinComponent},
    {path: 'membership/membership-manage', component: MembershipManageComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
