import { Component, OnInit } from '@angular/core';
import {Events} from '../event/event.model';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event/event.service';

@Component({
  selector: 'app-event-not-approved',
  templateUrl: './event-not-approved.component.html',
  styleUrls: ['./event-not-approved.component.css']
})
export class EventNotApprovedComponent implements OnInit {
  events$: Events[];
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.getNotApprovedEvents();
  }
  getNotApprovedEvents() {
    this.eventService.getNotAprrovedEvents().subscribe(
      eventList => {
        this.events$ = eventList;
      },
      err => console.log(err),
      () => console.log('Events list completed')
    );

  }

  getEvent(event: Events) {
    this.eventService.getEvent(event.eventId);
  }
}
