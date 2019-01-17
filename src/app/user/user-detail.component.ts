import {Component, Input, OnInit} from '@angular/core';
import {User} from './user.model';
import {UserService} from '../Service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {

  }
  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(res => {
      if (res !== null && res !== undefined) {
        console.log(res);
      }
    }, (error) => console.log(error), () => {});
  }
}
