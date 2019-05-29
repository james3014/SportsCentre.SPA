import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { DataService } from 'src/app/_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { map } from 'rxjs/operators';
import { Staff } from 'src/app/_models/staff';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  attendants: Staff[];
  classMode = false;
  memberMode = false;
  bookingMode = false;
  staffMode = false;
  reportingMode = false;

  constructor() {}

  ngOnInit() {
  }

  classToggle() {
    this.classMode = true;
    this.memberMode = false;
    this.bookingMode = false;
    this.staffMode = false;
    this.reportingMode = false;
  }

  memberToggle() {
    this.classMode = false;
    this.memberMode = true;
    this.bookingMode = false;
    this.staffMode = false;
    this.reportingMode = false;
  }

  bookingToggle() {
    this.classMode = false;
    this.memberMode = false;
    this.bookingMode = true;
    this.staffMode = false;
    this.reportingMode = false;
  }

  staffToggle() {
    this.classMode = false;
    this.memberMode = false;
    this.bookingMode = false;
    this.staffMode = true;
    this.reportingMode = false;
  }

  reportingToggle() {
    this.classMode = false;
    this.memberMode = false;
    this.bookingMode = false;
    this.staffMode = false;
    this.reportingMode = true;
  }
}
