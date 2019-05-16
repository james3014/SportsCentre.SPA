import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllBookings() {
    return this.http.get(this.baseUrl + 'bookings');
  }

  createNewBooking(model: any) {
    return this.http.post(this.baseUrl + 'bookings/create', model);
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
}
