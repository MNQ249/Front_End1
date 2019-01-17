import { Component, OnInit } from '@angular/core';
import {UserService} from '../Service/user.service';
import {User} from '../user/user.model';
import {AuthService} from '../authentication/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: number;
  user: User;

  constructor(private auth: AuthService, private userService: UserService) { }

  ngOnInit() {

    this.id = this.auth.getUserNumber();
    this.getUser();
  }
  getUser() {
    this.userService.getUser(this.id).subscribe(
      userData => {
        this.user = userData;
      },
      err => console.log(err),
      () => console.log('user profile id: ', this.id)
    );
  }
  }
