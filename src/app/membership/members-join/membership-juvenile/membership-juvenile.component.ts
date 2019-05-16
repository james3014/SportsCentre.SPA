import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-membership-juvenile',
  templateUrl: './membership-juvenile.component.html',
  styleUrls: ['./membership-juvenile.component.css']
})
export class MembershipJuvenileComponent implements OnInit {
  @Output() membershipType = new EventEmitter();
  @Input() user: User;
  type = 'Juvenile';
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
