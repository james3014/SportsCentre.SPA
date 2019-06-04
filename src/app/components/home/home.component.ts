import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../_services/auth.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;


  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  loggedIn() {
    return this.authService.loggedIn();
  }



}
