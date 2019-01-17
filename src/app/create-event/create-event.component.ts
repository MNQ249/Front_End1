import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Events} from '../event/event.model';
import {EventService} from '../event/event.service';
import {AuthService} from '../authentication/auth.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  myForm: FormGroup;
  event$: Observable<Events>;
  orgnaizerid: number;
  constructor(private formBuilder: FormBuilder, private eventService: EventService, private auth: AuthService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventCity: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventMaxCapacity: ['', Validators.compose([Validators.required, Validators.max(3)])]
  });

    this.orgnaizerid = this.auth.getUserNumber();
}
  onSubmit() {
    this.eventService.addEvents(this.orgnaizerid, this.myForm).subscribe(res => {
      if (res !== null && res !== undefined) {
        console.log(res);
      }
    }, (error) => console.log(error), () => {
      console.log('event added');
      alert('Create is Ok');
    });
  }
}

