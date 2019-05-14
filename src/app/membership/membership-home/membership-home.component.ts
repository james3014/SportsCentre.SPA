import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-membership-home',
  templateUrl: './membership-home.component.html',
  styleUrls: ['./membership-home.component.css']
})
export class MembershipHomeComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

}
