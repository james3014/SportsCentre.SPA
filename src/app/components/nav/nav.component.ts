import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { createOfflineCompileUrlResolver, ThrowStmt } from '@angular/compiler';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { Staff } from 'src/app/_models/staff';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  staff: Staff;
  user: User;
  model: any = {};
  registerMode = false;

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
  ) {}

  ngOnInit() {

  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('Logged Out');
    this.router.navigate(['/login']);
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
}
