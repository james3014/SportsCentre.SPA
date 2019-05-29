import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';

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

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-orange'
    };
  }

  createStaff() {
    this.authService.createStaff(this.model).subscribe(
      next => {
        this.alertify.success('Staff Member Created');
        this.createStaffForm.reset();
      },
      error => {
        this.alertify.error('Failed To Create Staff');
      }
    );
  }

}
