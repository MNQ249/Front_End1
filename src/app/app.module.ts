import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import {UserDetailComponent} from './user/user-detail.component';
import {UserEditComponent} from './user/user-edit.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { MyEventComponent } from './my-event/my-event.component';
import { EventApprovedComponent } from './event-approved/event-approved.component';
import { EventNotApprovedComponent } from './event-not-approved/event-not-approved.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { TicketComponent } from './ticket/ticket.component';
import {EditEventComponent} from './event-edit/event-edit.component';
import { EventTicketComponent } from './event-ticket/event-ticket.component';
import { ProfileComponent } from './profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BasicAuthInterceptor} from './authentication/basic-auth.interceptor';
import {ErrorInterceptor} from './authentication/error.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainComponent,
    RegistrationComponent,
    UserDetailComponent,
    UserEditComponent,
    LoginComponent,
    EventComponent,
    MyEventComponent,
    EventApprovedComponent,
    EventNotApprovedComponent,
    EventDetailComponent,
    EditEventComponent,
    CreateEventComponent,
    TicketComponent,
    EventTicketComponent,
    ProfileComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
