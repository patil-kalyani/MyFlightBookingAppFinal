import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
import { AuthGaurd } from './services/auth.gaurd';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'User',
    component: UserComponent
  },
  {
    path: 'BookTicket',
    component: BookTicketComponent
  },
  {
    path: 'scheduleFlight',
    component: ScheduleFlightComponent
  },
  {
    path: 'admin',
    canActivate:[AuthGaurd],
    component: AdminComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


