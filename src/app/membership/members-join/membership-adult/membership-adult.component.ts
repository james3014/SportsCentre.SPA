import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership-adult',
  templateUrl: './membership-adult.component.html',
  styleUrls: ['./membership-adult.component.css']
})
export class MembershipAdultComponent implements OnInit {
  type = 'Adult';
  
  constructor() { }

  ngOnInit() {
  }

}
