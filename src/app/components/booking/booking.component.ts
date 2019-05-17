import { Component, OnInit, Self, Optional } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  NgControl
} from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  model: any = {};
  bsConfig: Partial<BsDatepickerConfig>;

  form = new FormGroup({
    bookingTime: new FormControl(null, Validators.required)
  });

  options = [
    { id: 1, label: '08:00 - 09:00' },
    { id: 2, label: '09:00 - 10:00' },
    { id: 3, label: '10:00 - 11:00' },
    { id: 4, label: '11:00 - 12:00' },
    { id: 5, label: '12:00 - 13:00' },
    { id: 6, label: '13:00 - 14:00' },
    { id: 7, label: '14:00 - 15:00' },
    { id: 8, label: '15:00 - 16:00' },
    { id: 9, label: '16:00 - 17:00' },
    { id: 10, label: '17:00 - 18:00' },
    { id: 11, label: '18:00 - 19:00' },
    { id: 12, label: '19:00 - 20:00' },
  ];

  constructor(
    private dataService: DataService,
    private alertify: AlertifyService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-orange'
    };
  }

  createBooking() {
    const email = this.authService.currentUser.email;
    this.dataService.createBooking(this.model, email).subscribe(
      next => {
        this.alertify.success('Booking Created');
      },
      error => {
        this.alertify.error('Booking Failed');
      }
    );
  }
}
