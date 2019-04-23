import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembershipHomeComponent } from './membership/membership-home/membership-home.component';
import { MembershipDetailComponent } from './membership/membership-detail/membership-detail.component';
import { MembershipManageComponent } from './membership/membership-manage/membership-manage.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'membership/home', component: MembershipHomeComponent},
    {path: 'membership/membership-detail', component: MembershipDetailComponent},
    {path: 'membership/membership-manage', component: MembershipManageComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
