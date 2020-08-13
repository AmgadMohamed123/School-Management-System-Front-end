import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-age',
  templateUrl: './search-by-age.component.html',
  styleUrls: ['./search-by-age.component.css']
})
export class SearchByAgeComponent  {

  teachers:Teacher[];
  startAge:number;
  endAge:number;
  result:boolean;
  totalPages: number;
  currentPage: number = 0;
  private errorMessage: string;
  constructor(private _teacher:TeacherService,private _router:Router) { }




  search(startAge,endAge){
    this.startAge=startAge;
    this.endAge=endAge;
    this.onCurrentPageChange();
  }
    onCurrentPageChange() {
      this._teacher.searchTeacherPageByAge(this.startAge,this.endAge,this.currentPage).subscribe(
        data => {
          this.teachers = data['content']
          this.totalPages = data['totalPages']
          console.log(data)
        },
        error => {
          this.errorMessage = error
          console.log(this.errorMessage)
        }
      );
    }


  First() {
    this.currentPage = 0;
    this.onCurrentPageChange();
  }

  Previous() {
    this.currentPage > 0 ? this.currentPage-- : this.currentPage
    this.onCurrentPageChange();
  }

  Next() {
    this.currentPage < this.totalPages - 1 ? this.currentPage++ : this.currentPage
    this.onCurrentPageChange()
  }

  Last() {
    this.currentPage = this.totalPages - 1;
    this.onCurrentPageChange()
  }
  
  
  detailsTeacher(id){
    
    this._router.navigate(['details-teacher',id]);
  }

}
