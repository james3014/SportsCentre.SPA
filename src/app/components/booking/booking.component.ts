import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { Booking } from '../../_models/booking';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  model: any = {};
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private dataService: DataService, private alertify: AlertifyService, private authService: AuthService) { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-orange'
    };
  }

  createBooking() {
    const email = this.authService.currentUser.email;
    this.dataService.createBooking(this.model, email).subscribe(next => {
      this.alertify.success('Booking Created');
    }, error => {
      this.alertify.error('Booking Failed');
    });
  }

}
