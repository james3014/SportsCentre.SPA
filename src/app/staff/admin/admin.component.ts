import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  model: any = {};
  bsConfig: Partial<BsDatepickerConfig>;

  constructor() { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-orange'
    };
  }

  addClass() {

  }

  editClass() {

  }

  removeClass() {
  }

}
