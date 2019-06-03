import { Component, OnInit, Input } from '@angular/core';
import { Class } from 'src/app/_models/class';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { DataService } from 'src/app/_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-class-booking',
  templateUrl: './class-booking.component.html',
  styleUrls: ['./class-booking.component.css']
})
export class ClassBookingComponent implements OnInit {
  model: any = {};
  bsConfig: Partial<BsDatepickerConfig>;
  classes: Class[];
  id: number;

  constructor(
    private dataService: DataService,
    private alertify: AlertifyService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-orange'
    };

    this.dataService.getClasses().subscribe(
      (classes: Class[]) => {
        this.classes = classes;
        console.log('Classes', this.classes);
      },
      error => {
        this.alertify.error('Failed To Load Classes');
      }
    );
  }

  bookClass() {
    this.dataService.classBooking(this.id, this.model).subscribe(
      next => {
        this.alertify.success('Class Booking Created');
      },
      error => {
        this.alertify.error('Class Booking Failed');
      }
    );
  }
}
