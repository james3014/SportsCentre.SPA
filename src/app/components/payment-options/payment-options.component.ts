import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {
  @Output() cancelPayment = new EventEmitter();
  @Input() public membershipType: string;

  constructor() { }

  ngOnInit() {
  }

  cancelPaymentMode() {
    this.cancelPayment.emit(false);
  }

  selectedMembership(membershipType: string) {
    this.membershipType = membershipType;
  }


}
