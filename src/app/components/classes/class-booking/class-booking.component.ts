import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class-booking',
  templateUrl: './class-booking.component.html',
  styleUrls: ['./class-booking.component.css']
})
export class ClassBookingComponent implements OnInit {
  @Input() id: number;
  

  constructor() { }

  ngOnInit() {
  }

}
