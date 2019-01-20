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
       email: ([``, Validators.compose([Validators.required, Validators.pattern(/[A-Za-z0-9.!]+@[a-z.]+\.[a-z]{3}/),
         Validators.pattern(/[^\s]+/)])]),
       nin:  ([``, Validators.compose([Validators.required,
         Validators.pattern(/[^\s]+/), Validators.pattern(/[1-2]{1}[0-9]{9}/),
         Validators.minLength(10), Validators.maxLength(10)])]),
       userName: ([``, Validators.required, Validators.compose([Validators.pattern(/[a-z0-9.!@]{3,25}/), Validators.minLength(5), Validators.maxLength(25)])]),
       password: ([``, Validators.compose([Validators.required]), Validators.minLength(8), Validators.maxLength(16), Validators.pattern(/[a-zA-Z0-9!@]/),  Validators.pattern(/[^\s]+/)]),
       city:  ([``, Validators.required]),
       gender: ([``, Validators.required]),
       firstName: ([``, Validators.required]),
       lastName : ([``, Validators.required]),
       age : ([``, Validators.required]),
       phone: ([``, Validators.required, Validators.compose([Validators.minLength(9), Validators.maxLength(9), Validators.pattern(/[5]{1}[0-9]{8}/), Validators.pattern(/[^\s]+/)])]),
       role: ([``, Validators.required])
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
