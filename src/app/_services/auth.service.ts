import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { UserService } from './user.service';
import { Staff } from '../_models/staff';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;
  currentStaff: Staff;

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.currentUser = user.user;
          console.log(this.decodedToken);
          console.log(this.currentUser);
        }
      })
    );
  }

  staffLogin(model: any) {
    return this.http.post(this.baseUrl + 'staff', model).pipe(
      map((response: any) => {
        const staff = response;
        if (staff) {
          localStorage.setItem('token', staff.token);
          localStorage.setItem('staff', JSON.stringify(staff.staff));
          this.decodedToken = this.jwtHelper.decodeToken(staff.token);
          this.currentUser = staff.staff;
          console.log(this.decodedToken);
          console.log(this.currentUser);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  createStaff(model: any) {
    return this.http.post(this.baseUrl  + 'staff/create', model);
  }

  updateStaff(id: number, model: any) {
    return this.http.put(this.baseUrl + 'staff/update/' + id, model).pipe(
      map((response: any) => {
        const updatedStaff = response;
        if (updatedStaff) {
          console.log(updatedStaff);
        }
      })
    );
  }

  deleteStaff(id: number) {
    return this.http.delete(this.baseUrl + 'staff/delete/' + id).pipe(
      map((response: any) => {
        const deletedStaff = response;
        if (deletedStaff) {
          console.log(deletedStaff);
        }
      })
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles = this.decodedToken.role as Array<string>;
    allowedRoles.forEach(element => {
      if (userRoles.includes(element)) {
        isMatch = true;
        return;
      }
    });
    return isMatch;
  }
}
