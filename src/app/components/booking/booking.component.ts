import { Component, OnInit, Self, Optional, ViewChild, HostListener } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
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

  createBooking() {
    this.dataService.createBooking(this.model).subscribe(
      next => {
        this.alertify.success('Booking Created');
        this.bookingForm.reset();
      },
      error => {
        this.alertify.error('Booking Failed');
      }
    );
  }
}
