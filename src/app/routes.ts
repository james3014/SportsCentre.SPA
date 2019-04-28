import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembershipHomeComponent } from './membership/membership-home/membership-home.component';
import { MembershipManageComponent } from './membership/membership-manage/membership-manage.component';
import { RegisterComponent } from './authentication/register/register.component';
import { MembershipJoinComponent } from './membership/membership-join/membership-join.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { BookingComponent } from './booking/booking.component';
import { ShopComponent } from './shop/shop.component';
import { StaffLoginComponent } from './authentication/staff-login/staff-login.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'staff', component: StaffLoginComponent},
    {path: 'membership/home', component: MembershipHomeComponent},
    {path: 'membership/join', component: MembershipJoinComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'membership/membership-manage', component: MembershipManageComponent},
            {path: 'booking', component: BookingComponent},
            {path: 'shop', component: ShopComponent}
        ]
    }
];
