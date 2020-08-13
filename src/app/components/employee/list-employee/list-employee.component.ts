import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  totalRecords:number;
  page:number=1;
  employees=[{'id':1,'firstname':'Gamal','lastname':'Hassan','age':20},
  {'id':2,'firstname':'Sami','lastname':'Alaa','age':22},
  {'id':3,'firstname':'Hani','lastname':'Ali','age':23}

];
  constructor() { }

  ngOnInit(): void {
  }

}
