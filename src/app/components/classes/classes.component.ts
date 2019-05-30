import { Component, OnInit } from '@angular/core';
import { Class } from '../../_models/class';
import { DataService } from 'src/app/_services/data.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes: Class[];

  constructor(private dataService: DataService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.dataService.getClasses().subscribe((classes: Class[]) => {
        this.classes = classes;
        console.log('Classes', this.classes);
      }, error => {
        this.alertify.error('Failed To Load Classes');
      });
    }
  }
    // this.route.data.subscribe(data => {
    //   this.classes = data['classes'];
    // });
