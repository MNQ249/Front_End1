import {Component, OnInit} from '@angular/core';
import {AuthService} from './authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EventWebSite';
  constructor(private auth: AuthService) { }


  ngOnInit():  {
  };

  // @ts-ignore
  isLogged() {
    if (this.auth.isLogged()) {
      return true;
    }
  }
}
