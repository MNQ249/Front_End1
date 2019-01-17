import { Component, OnInit } from '@angular/core';
import {Ticket} from '../ticket/ticket.model';
import {EventService} from '../event/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-ticket',
  templateUrl: './event-ticket.component.html',
  styleUrls: ['./event-ticket.component.css']
})
export class EventTicketComponent implements OnInit {
  tickets: Ticket[];
  eventid: number;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((value: any) => {
      this.eventid = value.eventid;
    });

    this.getEventsTickets();
  }
  getEventsTickets() {
    this.eventService.getEventsTickets(this.eventid).subscribe(
      ticketList => {
        this.tickets = ticketList;
      },
      err => console.log(err),
      () => console.log('Tickets list completed')
    );
  }
}
