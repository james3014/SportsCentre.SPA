import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-membership-join',
  templateUrl: './membership-join.component.html',
  styleUrls: ['./membership-join.component.css']
})
export class MembershipJoinComponent implements OnInit {
  @Input() type: any;

  constructor() { }

  ngOnInit() {
  }

}
