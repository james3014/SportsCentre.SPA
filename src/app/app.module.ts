import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ErrorInterceptorProvider} from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { BookingComponent } from './booking/booking.component';
import { ClassesComponent } from './classes/classes.component';
import { ShopComponent } from './shop/shop.component';
import { FooterComponent } from './footer/footer.component';
import { MembershipHomeComponent } from './membership/membership-home/membership-home.component';
import { MembershipManageComponent } from './membership/membership-manage/membership-manage.component';
import { MembershipJoinComponent } from './membership/membership-join/membership-join.component';
import { appRoutes } from './routes';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { StaffLoginComponent } from './authentication/staff-login/staff-login.component';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      BookingComponent,
      ClassesComponent,
      MembershipJoinComponent,
      MembershipHomeComponent,
      MembershipManageComponent,
      ShopComponent,
      FooterComponent,
      AboutComponent,
      LoginComponent,
      StaffLoginComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
