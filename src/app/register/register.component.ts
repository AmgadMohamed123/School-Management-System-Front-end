import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user=new User();
  constructor() { }

  ngOnInit(): void {
  }

  changeInput(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
  }

