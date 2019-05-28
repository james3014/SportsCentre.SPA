import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { DataService } from 'src/app/_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('createClassForm') createClassForm: NgForm;
  model: any = {};
  bsConfig: Partial<BsDatepickerConfig>;
  @HostListener('window:beforeunload', ['$event'])

  unloadNotification($event: any) {
    if (this.createClassForm.dirty) {
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

  createClass() {
    this.dataService.createClass(this.model).subscribe(
      next => {
        this.alertify.success('Class Created');
        this.createClassForm.reset();
      },
      error => {
        this.alertify.error('Create Class Failed');
      }
    );
  }

  editClass() {}

  removeClass() {}
}
