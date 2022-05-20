import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketBooking } from '../models/TicketBooking';
import { AirLineService } from '../services/AirLineService';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  constructor(private _air: AirLineService, private _router: Router) { }
  TicketModel: TicketBooking = new TicketBooking();
  TicketModels: Array<TicketBooking> = new Array<TicketBooking>();

  
 
  BookTicket() {
  
    this._air.registerFlight(this.TicketModel).subscribe(res => this.TicketModels = res, err => console.log(err))
    alert("Ticket Booked Successfully.")  
    this._router.navigate(['/User'])
    }

  }

  
  


