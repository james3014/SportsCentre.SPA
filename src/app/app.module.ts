import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

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
import { FooterComponent } from './components/footer/footer.component';
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
      ShopComponent,
      FooterComponent,
      AboutComponent,
      LoginComponent,
      StaffLoginComponent,
      AdminComponent,
      ContactComponent,
      PaymentOptionsComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDatepickerModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
