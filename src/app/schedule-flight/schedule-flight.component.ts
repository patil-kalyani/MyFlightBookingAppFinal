import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirLine } from '../models/AirLine';
import { AirLineService } from '../services/AirLineService';

@Component({
  selector: 'app-schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.css']
})
export class ScheduleFlightComponent {
  constructor(private _air: AirLineService, private _router: Router) { }
  AirLine: AirLine = new AirLine();
  AirLineModels: Array<AirLine> = new Array<AirLine>();

  
 
  scheduleflight() {
    debugger;
    this._air.ScheduleFlight(this.AirLine).subscribe(res => this.AirLineModels = res, err => console.log(err))
    alert("AirLine Added Successfully.")  
    this._router.navigate(['/BookTicket'])
    }


}
