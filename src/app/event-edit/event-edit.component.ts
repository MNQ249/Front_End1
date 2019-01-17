import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Events} from '../event/event.model';
import {EventService} from '../event/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EditEventComponent implements OnInit {
  myForm: FormGroup;
  eventid: number;
  event$: Events;

  constructor(private formBuilder: FormBuilder, private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((value: any) => {
      this.eventid = value.eventid;
    });

    this.eventService.getEvent(this.eventid).subscribe((value0 => {
      this.event$ = value0;

      this.myForm.patchValue(this.event$ as any);
    }));

    this.myForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventCity: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventMaxCapacity: ['', Validators.compose([Validators.required, Validators.max(3)])]
    });
  }

  onSubmit() {
    this.eventService.updateEvent(this.eventid, this.myForm).subscribe(res => {
      if (res !== null && res !== undefined) {
        console.log(res);
      }
    }, (error) => console.log(error), () => {
      console.log(' editing is Ok');
    });
  }

  deleteEvent() {
    this.eventService.deleteEvent(this.eventid).subscribe(res => {
      if (res !== null && res !== undefined) {
        console.log(res);
      }
    }, (error) => console.log(error), () => {
    });
  }
}

