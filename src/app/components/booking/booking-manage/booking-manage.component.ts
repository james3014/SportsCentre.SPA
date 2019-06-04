import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { DataService } from 'src/app/_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Booking } from 'src/app/_models/booking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-manage',
  templateUrl: './booking-manage.component.html',
  styleUrls: ['./booking-manage.component.css']
})
export class BookingManageComponent implements OnInit {
  bookings: Booking[];
  user: User;
  id: number;

  constructor(private dataService: DataService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.dataService.getUserBookings(this.user.id).subscribe(
      (bookings: Booking[]) => {
        this.bookings = bookings;
        console.log('Bookings', this.bookings);
      },
      error => {
        this.alertify.error('Failed To Load Bookings');
      }
    );
  }

  cancelBooking() {
    this.dataService.cancelBooking(this.id).subscribe(
      next => {
        this.alertify.success('Booking Cancelled');
      },
      error => {
        this.alertify.error('Booking Cancellation Failed');
      }, () => {
        this.router.navigate(['/booking/cancellation']);
      }
    );
  }



}
