import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {RegistrationComponent} from './registration/registration.component';
import {UserEditComponent} from './user/user-edit.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './authentication/auth.guard';
import {EventComponent} from './event/event.component';
import {MyEventComponent} from './my-event/my-event.component';
import {EventApprovedComponent} from './event-approved/event-approved.component';
import {EventNotApprovedComponent} from './event-not-approved/event-not-approved.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {EditEventComponent} from './event-edit/event-edit.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {EventTicketComponent} from './event-ticket/event-ticket.component';
import {ProfileComponent} from './profile/profile.component';
import {TicketComponent} from './ticket/ticket.component';

const routes: Routes = [
  {path: '', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'home', component: AppComponent},
  {path: 'user', component: UserComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'user/:id', component: UserEditComponent},
  {path: 'login', component: LoginComponent},
  {path: 'event', component: EventComponent},
  {path: 'my-event', component: MyEventComponent},
  {path: 'event-approved', component: EventApprovedComponent},
  {path: 'event-not-approved', component: EventNotApprovedComponent},
  {path: 'event/:eventid', component: EventDetailComponent},
  {path: 'editEvent/:eventid', component: EditEventComponent},
  {path: 'createEvent', component: CreateEventComponent},
  {path: 'eventTicket/:eventid', component: EventTicketComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'ticket', component: TicketComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
