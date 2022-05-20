import { Component, OnInit } from '@angular/core';
import { AirLine } from '../models/AirLine';
import { AirLineService } from '../services/AirLineService';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  AirLines:Array<AirLine> = new Array<AirLine>();
  constructor(private _airlineService: AirLineService) { }

  ngOnInit(): void {
    this._airlineService.getAirLine().subscribe(res => this.AirLines = res, err => console.log(err))

  }

}
