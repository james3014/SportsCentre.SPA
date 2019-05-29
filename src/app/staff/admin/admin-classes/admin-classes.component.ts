import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Staff } from 'src/app/_models/staff';
import { DataService } from 'src/app/_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-classes',
  templateUrl: './admin-classes.component.html',
  styleUrls: ['./admin-classes.component.css']
})
export class AdminClassesComponent implements OnInit {
  @ViewChild('createClassForm') createClassForm: NgForm;
  model: any = {};
  bsConfig: Partial<BsDatepickerConfig>;
  @HostListener('window:beforeunload', ['$event'])
  attendants: Staff;

  unloadNotification($event: any) {
    if (this.createClassForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private dataService: DataService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-orange'
    };

    this.route.data.subscribe(data => {
      this.attendants = data['attendants'];
    });

    console.log(this.attendants);
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
