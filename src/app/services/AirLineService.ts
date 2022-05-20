import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { AirLine } from '../models/AirLine';
import { TicketBooking } from '../models/TicketBooking';

@Injectable()
export class AirLineService {
    private _AddAirlineUrl = "http://localhost:15940/api/Admin/AddFlight";
    private _getAlineUrl = "http://localhost:27152/api/Flight/search";
    private _registerFlight="http://localhost:27152/api/Flight/register";
    private _ScheduleFlight="http://localhost:15940/api/Admin/AddFlight";
    private _UpdateFlight="http://localhost:15940/api/Admin/ScheduleFlight"


    constructor(private http: HttpClient) {
    }

    getAirLine() {
     var getAir= this.http.get<any>(this._getAlineUrl)
     return getAir;
    }

    PostAirLine(flight : AirLine) {
        return this.http.post<any>(this._AddAirlineUrl,flight)
    }

    registerFlight(user: TicketBooking) {
        
        return this.http.post<any>(this._registerFlight, user)
    }

    ScheduleFlight(air : AirLine){
        return this.http.post<any>(this._ScheduleFlight, air)
    }
    UpdateFlight(air : AirLine){
        return this.http.post<any>(this._UpdateFlight, air)
    }
}