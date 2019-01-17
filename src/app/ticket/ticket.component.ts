import { Component, OnInit } from '@angular/core';
import {EventService} from '../event/event.service';
import {AuthService} from '../authentication/auth.service';
import {Ticket} from './ticket.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets: Ticket[];
  tickets$: Ticket[];
  id: number;
  myForm: FormGroup;
  constructor(private eventService: EventService, private auth: AuthService, private formBulider: FormBuilder, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.auth.getUserNumber();
    this.getMyTickets();
    this.getAttendedTickets();
    this.myForm = this.formBulider.group({
      comments: ['', Validators.required],
      rate: ['', Validators.required],
    });
  }
  getMyTickets() {
    this.eventService.getMyTickets(this.id).subscribe(
      ticketList => {
        this.tickets = ticketList;
      },
      err => console.log(err),
      () => console.log('Tickets list completed')
    );
  }
  getAttendedTickets() {
    this.eventService.getAttendedTickets(this.id).subscribe(
      ticketList => {
        this.tickets$ = ticketList;
      },
      err => console.log(err),
      () => console.log('Attended Tickets list completed')
    );
  }
  cancelTicket(ticketID: number) {
    this.eventService.cancelTicket(ticketID).subscribe(res => {
      if (res !== null && res !== undefined) {
        console.log(res);
      }
    }, (error) => console.log(error), () => {});
location.reload();
  }

  addRate(ticketID: number) {
    this.eventService.addRate(ticketID, this.myForm).subscribe(res => {
      if (res !== null && res !== undefined) {
        console.log(res);
      }
    }, (error) => console.log(error), () => {});
  }

  rated(rated: boolean) {
    if (rated === false) {
      return true;
    }
  }
}
