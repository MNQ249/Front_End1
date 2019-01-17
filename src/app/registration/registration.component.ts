import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../user/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../Service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myReactiveForm: FormGroup;
  user$: Observable<User>;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
     this.myReactiveForm = this.formBuilder.group({
       email:  ``,
       nin:  ``,
       userName: `` ,
       password: ``,
       city:  ``,
       gender: ``,
       firstName: ``,
       lastName : ``,
       age : ``,
       phone: ``,
       role: ``
     });
  }
   onSubmit() {
     this.userService.addUser(this.myReactiveForm.value).subscribe(result => {
       if (result !== null && result !== undefined) {
         console.log(result);
       }
     }, (error) => console.log(error), () => {alert('Register is Ok') , this.router.navigate(['/login']);});
     }
  }
