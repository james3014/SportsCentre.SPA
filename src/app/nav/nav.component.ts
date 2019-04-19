import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  registerMode = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged In Successfully');
    }, error => {
      console.log('Failed To Login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }


  logout() {
    localStorage.removeItem('token');
    console.log('Logged Out');
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

}
