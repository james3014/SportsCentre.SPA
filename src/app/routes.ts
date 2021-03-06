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
import { StaffResolver } from './_resolvers/staff.resolver';
import { ClassResolver } from './_resolvers/class.resolver';
import { ClassBookingComponent } from './components/classes/class-booking/class-booking.component';
import { FunctionBookingComponent } from './components/booking/function-booking/function-booking.component';
import { BookingManageComponent } from './components/booking/booking-manage/booking-manage.component';
import { MembershipConfirmationComponent } from './membership/membership-confirmation/membership-confirmation.component';
import { MembershipCancelComponent } from './membership/membership-cancel/membership-cancel.component';
import { BookingCancellationComponent } from './components/booking/booking-cancellation/booking-cancellation.component';
import { MembershipInfoComponent } from './membership/membership-info/membership-info.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'membership/info', component: MembershipInfoComponent},
    {path: 'classes', component: ClassesComponent, resolve: {ClassResolver}},
    {path: 'contact', component: ContactComponent},
    {path: 'staff', component: StaffLoginComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'membership/manage/:id', component: MembershipManageComponent, data: {roles: ['Member']}, resolve: {UserResolver}},
            {path: 'booking', component: BookingComponent, data: {roles: ['Member']}},
            {path: 'class/booking/:id', component: ClassBookingComponent, data: {roles: ['Member', 'User']}},
            {path: 'booking/function', component: FunctionBookingComponent, data: {roles: ['Member', 'User']}},
            {path: 'shop', component: ShopComponent},
            {path: 'admin', component: AdminComponent, data: {roles: ['Admin']}, resolve: {StaffResolver}},
            {path: 'bookings', component: BookingComponent, data: {roles: ['Member', 'User']}},
            {path: 'bookings/manage', component: BookingManageComponent, data: {roles: ['Member', 'User']}},
            {path: 'membership/home/:id', component: MembershipHomeComponent, resolve: {UserResolver}},
            {path: 'membership/adult', component: MembershipAdultComponent, data: {roles: ['User']}},
            {path: 'membership/juvenile', component: MembershipJuvenileComponent, data: {roles: ['User']}},
            {path: 'membership/family', component: MembershipFamilyComponent, data: {roles: ['User']}},
            {path: 'membership/confirmation', component: MembershipConfirmationComponent},
            {path: 'membership/cancel', component: MembershipCancelComponent},
            {path: 'booking/cancellation', component: BookingCancellationComponent},
            {path: '**', redirectTo: 'home', pathMatch: 'full'},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
