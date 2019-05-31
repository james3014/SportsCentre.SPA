import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Staff } from 'src/app/_models/staff';

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
  staff: Staff[];
  id: number;

  unloadNotification($event: any) {
    if (this.createStaffForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-orange'
    };

    this.userService.getStaff().subscribe(
      (staff: Staff[]) => {
        this.staff = staff;
        console.log('Staff', this.staff);
      },
      error => {
        this.alertify.error('Failed To Load Staff');
      }
    );
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

  updateStaff() {
    this.authService.updateStaff(this.id, this.model).subscribe(
      next => {
        this.alertify.success('Staff Member Updated');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  removeStaff() {
    console.log(this.id);
    this.authService.deleteStaff(this.id).subscribe(
      next => {
        this.alertify.success('Staff Deleted');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
