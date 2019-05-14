import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-membership-adult',
  templateUrl: './membership-adult.component.html',
  styleUrls: ['./membership-adult.component.css']
})
export class MembershipAdultComponent implements OnInit {
  @Output() membershipType = new EventEmitter();
  @Input() user: User;
  type = 'Adult';
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
