import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { DataService } from 'src/app/_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-function-booking',
  templateUrl: './function-booking.component.html',
  styleUrls: ['./function-booking.component.css']
})
export class FunctionBookingComponent implements OnInit {
  @ViewChild('bookingForm') bookingForm: NgForm;
  model: any = {};
  bsConfig: Partial<BsDatepickerConfig>;
  email = this.authService.currentUser.email;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.bookingForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private dataService: DataService,
    private alertify: AlertifyService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-orange'
    };
  }

  bookFunction() {
    this.dataService.functionBooking(this.model).subscribe(
      next => {
        this.alertify.success('Function Booked');
        this.bookingForm.reset();
      },
      error => {
        this.alertify.error('Booking Failed');
      }
    );
  }
}
