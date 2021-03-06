import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ErrorInterceptorProvider} from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { BookingComponent } from './components/booking/booking.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ShopComponent } from './components/shop/shop.component';
import { MembershipHomeComponent } from './membership/membership-home/membership-home.component';
import { MembershipManageComponent } from './membership/membership-manage/membership-manage.component';
import { appRoutes } from './routes';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { StaffLoginComponent } from './authentication/staff-login/staff-login.component';
import { AdminComponent } from './staff/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserService } from './_services/user.service';
import { MembershipAdultComponent } from './membership/members-join/membership-adult/membership-adult.component';
import { MembershipJuvenileComponent } from './membership/members-join/membership-juvenile/membership-juvenile.component';
import { MembershipFamilyComponent } from './membership/members-join/membership-family/membership-family.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { UserResolver } from './_resolvers/user.resolver';
import { AdminClassesComponent } from './staff/admin/admin-classes/admin-classes.component';
import { AdminBookingsComponent } from './staff/admin/admin-bookings/admin-bookings.component';
import { AdminMembersComponent } from './staff/admin/admin-members/admin-members.component';
import { AdminReportingComponent } from './staff/admin/admin-reporting/admin-reporting.component';
import { AdminStaffComponent } from './staff/admin/admin-staff/admin-staff.component';
import { StaffResolver } from './_resolvers/staff.resolver';
import { ClassResolver } from './_resolvers/class.resolver';
import { ClassCardComponent } from './components/classes/class-card/class-card.component';
import { ClassBookingComponent } from './components/classes/class-booking/class-booking.component';
import { FunctionBookingComponent } from './components/booking/function-booking/function-booking.component';
import { BookingManageComponent } from './components/booking/booking-manage/booking-manage.component';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { UserManagementComponent } from './staff/admin/user-management/user-management.component';
import { AdminService } from './_services/admin.service';
import { RolesModalComponent } from './staff/admin/roles-modal/roles-modal.component';
import { MembershipConfirmationComponent } from './membership/membership-confirmation/membership-confirmation.component';
import { MembershipCancelComponent } from './membership/membership-cancel/membership-cancel.component';
import { BookingCancellationComponent } from './components/booking/booking-cancellation/booking-cancellation.component';
import { MembershipInfoComponent } from './membership/membership-info/membership-info.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      BookingComponent,
      ClassesComponent,
      MembershipHomeComponent,
      MembershipManageComponent,
      MembershipAdultComponent,
      MembershipJuvenileComponent,
      MembershipFamilyComponent,
      MembershipInfoComponent,
      ShopComponent,
      AboutComponent,
      LoginComponent,
      StaffLoginComponent,
      AdminComponent,
      ContactComponent,
      PaymentOptionsComponent,
      AdminClassesComponent,
      AdminBookingsComponent,
      AdminMembersComponent,
      AdminReportingComponent,
      AdminStaffComponent,
      ClassCardComponent,
      ClassBookingComponent,
      FunctionBookingComponent,
      BookingManageComponent,
      BookingCancellationComponent,
      HasRoleDirective,
      UserManagementComponent,
      RolesModalComponent,
      MembershipConfirmationComponent,
      MembershipCancelComponent,

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDatepickerModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule, NgxPermissionsModule.forRoot(),
      ModalModule.forRoot(),
      NgxTwitterTimelineModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      UserResolver,
      StaffResolver,
      ClassResolver,
      AdminService
   ],
   entryComponents: [
      RolesModalComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
