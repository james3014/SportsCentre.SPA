import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Staff } from '../_models/staff';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAttendants(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.baseUrl + 'user/attendants');
  }

  getStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.baseUrl + 'user/staff');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'data/users/' + id, httpOptions);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'users/update' + id, user, httpOptions);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'users/delete' + id, httpOptions);
  }
}
