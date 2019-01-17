import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from './user.model';
import {UserService} from '../Service/user.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  myReactiveForm: FormGroup;
  id: number;
  user: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((value: any) => {
      this.id = value.id;
    });
    this.userService.getUser(this.id).subscribe(value => {
      this.user = value;
      this.myReactiveForm.patchValue(this.user as any);

    });

    this.myReactiveForm = this.formBuilder.group({
      email: ``,
      nin: ``,
      userName: ``,
      password: ``,
      city: ``,
      gender: ``,
      firstName: ``,
      lastName: ``,
      age: ``,
      phone: ``,
      role: ``

    });
  }

  onSubmit() {
    this.userService.updateUser(this.id, this.myReactiveForm).subscribe(result => {
      if (result !== null && result !== undefined) {
        console.log(result);
      }
    }, (error) => console.log(error), () => { alert('user  file is update');
    });
  }
}

