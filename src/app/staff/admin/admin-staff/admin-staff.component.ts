import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-staff',
  templateUrl: './admin-staff.component.html',
  styleUrls: ['./admin-staff.component.css']
})
export class AdminStaffComponent implements OnInit {
  @ViewChild('createStaffForm') createStaffForm: NgForm;
  model: any = {};
  bsConfig: Partial<BsDatepickerConfig>;
  @HostListener('window:beforeunload', ['$event'])

  unloadNotification($event: any) {
    if (this.createStaffForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
