import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.model = Object.assign({}, this.loginForm.value);
      this.authService.login(this.model).subscribe(() => {
        this.alertify.success('Logged In Successfully');
      }, error => {
        this.alertify.error('Failed To Login');
      }, () => {
        this.router.navigate(['']);
      });
    }
  }
}
