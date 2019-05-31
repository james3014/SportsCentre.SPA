import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Staff } from 'src/app/_models/staff';
import { DataService } from 'src/app/_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { Class } from 'src/app/_models/class';

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
  attendants: Staff[];
  classes: Class[];
  id: number;

  unloadNotification($event: any) {
    if (this.createClassForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private dataService: DataService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-orange'
    };

    this.userService.getAttendants().subscribe((attendants: Staff[]) => {
      this.attendants = attendants;
      console.log('Attendants', this.attendants);
    }, error => {
      this.alertify.error('Failed To Load Attendants');
    });

    this.dataService.getClasses().subscribe((classes: Class[]) => {
      this.classes = classes;
      console.log('Classes', this.classes);
    }, error => {
      this.alertify.error('Failed To Load Classes');
    });

    // this.route.data.subscribe(data => {
    //   this.attendants = data['attendants'];
    // });
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

  editClass() {
    this.dataService.updateClass(this.id, this.model).subscribe(
      next => {
        this.alertify.success('Class Updated');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  removeClass() {
    this.dataService.deleteClass(this.id).subscribe(
      next => {
        this.alertify.success('Class Deleted');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
