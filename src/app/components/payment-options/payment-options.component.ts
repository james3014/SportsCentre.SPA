import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { DataService } from 'src/app/_services/data.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {
  @Output() cancelPayment = new EventEmitter();
  @Input() public membershipType: string;
  user: User;

  constructor(
    private dataService: DataService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  cancelPaymentMode() {
    this.cancelPayment.emit(false);
  }

  selectedMembership(membershipType: string) {
    this.membershipType = membershipType;
  }

  confirmMembership() {
    if (this.membershipType === 'Monthly') {
      this.user.membershipType = 'Monthly';
      console.log(this.user);
      this.dataService.createMembership(this.user).subscribe(
        () => {
          this.alertify.success('Membership Purchased');
        },
        error => {
          this.alertify.error('Membership Purchase Failed, Please Try Again');
        },
        () => {
          this.router.navigate(['membership/confirmation']);
        }
      );
    } else {
      this.user.membershipType = 'Annual';
      console.log(this.user);
      this.dataService.createMembership(this.user).subscribe(
        () => {
          this.alertify.success('Membership Purchased');
        },
        error => {
          this.alertify.error('Membership Purchase Failed, Please Try Again');
        },
        () => {
          this.router.navigate(['membership/confirmation']);
        }
      );
    }
  }
}
