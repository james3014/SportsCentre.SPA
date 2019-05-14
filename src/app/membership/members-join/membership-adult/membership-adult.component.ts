import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-membership-adult',
  templateUrl: './membership-adult.component.html',
  styleUrls: ['./membership-adult.component.css']
})
export class MembershipAdultComponent implements OnInit {
  @Output() membershipType = new EventEmitter();
  type = 'Adult';
  paymentMode = false;
  paymentOption = 'Default';

  constructor() { }

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


