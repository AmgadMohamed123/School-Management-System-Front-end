import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  searchKey:string;
  searchType:string;
  totalRecords:number;
    page:number=1;
    search(searchKey,searchType){
  this.searchKey=searchKey;
  this.searchType=searchType;
}
  constructor() { }

  ngOnInit(): void {
  }

}
