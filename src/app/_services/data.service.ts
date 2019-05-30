import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Class } from '../_models/class';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  getAllBookings() {
    return this.http.get(this.baseUrl + 'bookings');
  }

  createBooking(model: any) {
    return this.http.post(this.baseUrl + 'data/bookings/create', model).pipe(
      map((response: any) => {
        const booking = response;
        if (booking) {
          console.log(booking);
        }
      })
    );
  }

  classBooking(model: any) {
    return this.http.post(this.baseUrl + 'data/bookings/classes', model).pipe(
      map((response: any) => {
        const booking = response;
        if (booking) {
          console.log(booking);
        }
      })
    );
  }

  createMembership(model: any) {
    return this.http.post(this.baseUrl + 'data/membership/create', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          console.log(user);
        }
      })
    );
  }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.baseUrl + 'data/classes');
  }

  createClass(model: any) {
    return this.http.post(this.baseUrl + 'admin/classes/create', model).pipe(
      map((response: any) => {
        const createdClass = response;
        if (createdClass) {
          console.log(createdClass);
        }
      })
    );
  }

  deleteClass(id: number) {
    return this.http.delete(this.baseUrl + 'admin/classes/delete' + id).pipe(
      map((response: any) => {
        const deletedClass = response;
        if (deletedClass) {
          console.log(deletedClass);
        }
      })
    );
  }



}
