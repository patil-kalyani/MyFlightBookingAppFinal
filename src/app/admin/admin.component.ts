import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirLine } from '../models/AirLine';
import { AirLineService } from '../services/AirLineService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  {

  AirLines:AirLine = new AirLine();
  AirlinesModels: Array<AirLine> = new Array<AirLine>();
  constructor(private _airlineService: AirLineService, private _router: Router) { }

  
  ngOnInit(): void {
    this._airlineService.getAirLine().subscribe(res => this.AirlinesModels = res, err => console.log(err))

  }

  EditAirline(air : AirLine){
    this._airlineService.UpdateFlight(this.AirLines).subscribe(res => this.AirlinesModels = res, err => console.log(err)) 
    this._router.navigate(['/scheduleFlight'])
  }
}
