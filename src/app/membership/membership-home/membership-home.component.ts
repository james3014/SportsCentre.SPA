import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership-home',
  templateUrl: './membership-home.component.html',
  styleUrls: ['./membership-home.component.css']
})
export class MembershipHomeComponent implements OnInit {
  public name = 'Jamie';

  constructor() { }

  ngOnInit() {
  }

}
