import { Component, OnInit } from '@angular/core';
import {User} from './user.model';
import {UserService} from '../Service/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user$: User[];
  users: User[];
  currentUser: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.getUsersEnable();
    this.getUsersNotEnable();
  }


  getUsersEnable() {
    this.userService.getUsersEnable().subscribe(
      userData => {
        this.user$ = userData;
      },
      err => console.log(err),
      () => console.log('Getting users complete...')
    );
  }

  getUsersNotEnable() {
    this.userService.getUsersNotEnable().subscribe(
      userData => {
        this.users = userData;
      },
      err => console.log(err),
      () => console.log('Getting users complete...')
    );
  }

  EnableUser(user: User) {
    this.userService.EnableUser(user.id).subscribe(
      userData => {
      },
      err => console.log(err),
      () => console.log('Getting users complete...')
    );
  }
  getUser(user) {
    this.currentUser = user;

  }

}
