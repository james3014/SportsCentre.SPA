import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getAllBookings() {
  return this.http.get(this.baseUrl + 'bookings');
}

createNewBooking(model: any) {
  return this.http.post(this.baseUrl + 'bookings/create', model);
}

}