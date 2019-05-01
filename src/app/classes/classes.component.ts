import { Component, OnInit } from '@angular/core';
import { Class } from '../_models/class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes: Class[];

  constructor() { }

  ngOnInit() {
  }

  

}
