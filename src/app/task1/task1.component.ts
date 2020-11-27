  import { Component} from '@angular/core';
  import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})

export class Task1Component {

  constructor() { }
  registerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });
  firstName;
  lastName;
  email;
  password;

  // tslint:disable-next-line:typedef
  onSubmit(){
    this.firstName = this.registerForm.get('firstName').value;
    this.lastName = this.registerForm.get('lastName').value;
    this.email = this.registerForm.get('email').value;
    this.password = this.registerForm.get('password').value;
    }

}
