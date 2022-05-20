import { Component } from '@angular/core';
import { UserData } from './models/UserData';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'flight-booking-app';

  constructor(private _authService:AuthService) {
   
  }

  LogOut(){
    this._authService.logoutUser();
  }

  LoggedIn(input:boolean):boolean{
    if(input){
      return this._authService.loggedIn();
    }
    else{
      return !this._authService.loggedIn();
    }
  
  }

  
  
}
