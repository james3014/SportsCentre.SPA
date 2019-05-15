import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MembershipHomeComponent } from './membership/membership-home/membership-home.component';
import { MembershipManageComponent } from './membership/membership-manage/membership-manage.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { BookingComponent } from './components/booking/booking.component';
import { ShopComponent } from './components/shop/shop.component';
import { StaffLoginComponent } from './authentication/staff-login/staff-login.component';
import { AdminComponent } from './staff/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClassesComponent } from './components/classes/classes.component';
import { MembershipAdultComponent } from './membership/members-join/membership-adult/membership-adult.component';
import { MembershipJuvenileComponent } from './membership/members-join/membership-juvenile/membership-juvenile.component';
import { MembershipFamilyComponent } from './membership/members-join/membership-family/membership-family.component';
import { UserResolver } from './_resolvers/user.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'classes', component: ClassesComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'staff', component: StaffLoginComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'membership/membership-manage', component: MembershipManageComponent},
            {path: 'booking', component: BookingComponent},
            {path: 'shop', component: ShopComponent},
            {path: 'admin', component: AdminComponent},
            {path: 'bookings', component: BookingComponent},
            {path: 'membership/home/:id', component: MembershipHomeComponent, resolve: {UserResolver}},
            {path: 'membership/adult', component: MembershipAdultComponent},
            {path: 'membership/juvenile', component: MembershipJuvenileComponent},
            {path: 'membership/family', component: MembershipFamilyComponent},
            {path: '**', redirectTo: 'home', pathMatch: 'full'},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
