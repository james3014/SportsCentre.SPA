import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { Class } from 'src/app/_models/class';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { DataService } from 'src/app/_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-class-booking',
  templateUrl: './class-booking.component.html',
  styleUrls: ['./class-booking.component.css']
})
export class ClassBookingComponent implements OnInit {
  @ViewChild('bookClassForm') bookClassForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  model: any = {};
  bsConfig: Partial<BsDatepickerConfig>;
  classes: Class[];
  id: number;

  unloadNotification($event: any) {
    if (this.bookClassForm.dirty) {
      $event.returnValue = true;
    }
  }

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
        this.bookClassForm.reset();
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
