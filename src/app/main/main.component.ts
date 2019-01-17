import { Component, OnInit } from '@angular/core';
import {AuthService} from '../authentication/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  isAdmin() {
    if (this.auth.getRole() === 'ROLE_ADMIN') {
      return true;
    }
  }

  isOrganizer() {
    if (this.auth.getRole() === 'ROLE_ORGANIZER') {
      return true;
    }
  }

  isUser() {
    if (this.auth.getRole() === 'ROLE_USER') {
      return true;
    }
  }

  logOut() {
    this.auth.logout();
    location.reload();
  }

  isLogged() {
    if (this.auth.isLogged()) {
      return true;
    }
  }

}
