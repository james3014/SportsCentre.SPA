import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership-home',
  templateUrl: './membership-home.component.html',
  styleUrls: ['./membership-home.component.css']
})
export class MembershipHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
