import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();
  constructor() { }

  ngOnInit(): void {
  }
  changeInput(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
  }

}
