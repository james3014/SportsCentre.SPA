import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-membership-family',
  templateUrl: './membership-family.component.html',
  styleUrls: ['./membership-family.component.css']
})
export class MembershipFamilyComponent implements OnInit {
  @Output() membershipType = new EventEmitter();
  @Input() user: User;
  type = 'Family';
  paymentMode = false;
  paymentOption = 'Default';

  constructor() {}

  ngOnInit() {
  }

  paymentToggle() {
    this.paymentMode = true;
  }

  monthlySelected() {
    this.paymentOption = 'Monthly';
  }

  annualSelected() {
    this.paymentOption = 'Annual';
  }

  cancelPaymentMode(paymentMode: boolean) {
    this.paymentMode = paymentMode;
  }

}
