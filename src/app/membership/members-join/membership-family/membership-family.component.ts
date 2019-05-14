import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership-family',
  templateUrl: './membership-family.component.html',
  styleUrls: ['./membership-family.component.css']
})
export class MembershipFamilyComponent implements OnInit {
  type = 'Family';
  constructor() { }

  ngOnInit() {
  }

}
