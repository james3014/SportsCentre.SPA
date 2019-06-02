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

  getUserBookings(id: number) {
    return this.http.get(this.baseUrl + 'data/bookings/' + id);
  }

  createBooking(model: any) {
    return this.http.post(this.baseUrl + 'data/bookings/facility', model).pipe(
      map((response: any) => {
        const booking = response;
        if (booking) {
          console.log(booking);
        }
      })
    );
  }

  classBooking(id: number, model: any) {
    return this.http.post(this.baseUrl + 'data/bookings/classes/' + id, model).pipe(
      map((response: any) => {
        const booking = response;
        if (booking) {
          console.log(booking);
        }
      })
    );
  }

  functionBooking(model: any) {
    return this.http.post(this.baseUrl + 'data/bookings/function', model).pipe(
      map((response: any) => {
        const booking = response;
        if (booking) {
          console.log(booking);
        }
      })
    );
  }

  cancelBooking(id: number) {
    return this.http.delete(this.baseUrl + 'data/bookings/cancel/' + id).pipe(
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

  cancelMembership(id: number) {
    return this.http.get(this.baseUrl + 'data/membership/cancel/' + id).pipe(
      map((response: any) => {
        const membership = response;
        if (membership) {
          console.log(membership);
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

  updateClass(id: number, model: any) {
    return this.http.put(this.baseUrl + 'admin/classes/update/' + id, model).pipe(
      map((response: any) => {
        const updatedClass = response;
        if (updatedClass) {
          console.log(updatedClass);
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
