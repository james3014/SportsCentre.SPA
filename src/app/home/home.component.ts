import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.authService.loggedIn();
  }



}
