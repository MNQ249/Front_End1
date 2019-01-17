import { Component, OnInit } from '@angular/core';
import {Events} from '../event/event.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../event/event.service';
import {AuthService} from '../authentication/auth.service';
import {Comments} from '../event/Comments';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event$: Events;
  eventid: number;
  userid: number;
  myForm: FormGroup;
  comments: Comments[];
  private sub: Subscription;
  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((param: any) => {
      this.eventid = param.eventid;
    });

    this.myForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });

    this.eventService.getEvent(this.eventid).subscribe((value => {
      this.event$ = value;
    }));

    // this.getComments();

    this.userid = this.auth.getUserNumber();
  }

  approveEvent(eventid: number) {
    this.eventService.approveEvent(eventid).subscribe(
      approve => {
      },
      err => console.log(err),
      () => alert('Event approved')
    );
  }

  rejectEvent(eventid: number) {
    this.eventService.rejectEvent(eventid).subscribe(
      approve => {
      },
      err => console.log(err),
      () => alert('Event rejected')
    );
  }

  book() {
    this.eventService.bookEvent(this.eventid, this.userid).subscribe(
      book => {
      },
      err => console.log(err),
      () => alert('Ticket created')
    ),
      alert('Ticket Created');
  }

  getComments() {
    this.eventService.getComments(this.eventid).subscribe(
      commentList => {
        this.comments = commentList;
      },
      err => console.log(err),
      () => console.log('Comments list completed')
    );
  }

  addComment() {
    this.eventService.addComment(this.userid, this.eventid, this.myForm).subscribe(
      data => {
      },
      err => console.log(err),
      () => alert('Comment Added')
    );
  }

  isAdmin() {
    if (this.auth.getRole() === 'ROLE_ADMIN') {
      return true;
    }
  }

  isOrg() {
    if (this.auth.getRole() === 'ROLE_ORGANIZER') {
      return true;
    }
  }

  isUser() {
    if (this.auth.getRole() === 'ROLE_USER') {
      return true;
    }
  }

  SerachEcity() {
    this.eventService.getComments(this.eventid).subscribe(
      commentList => {
        this.comments = commentList;
      },
      err => console.log(err),
      () => console.log('Comments list completed')
    );
  }
  isApproved() {
    if (this.event$.approved === true) {
      return true;
    }
  }
}
