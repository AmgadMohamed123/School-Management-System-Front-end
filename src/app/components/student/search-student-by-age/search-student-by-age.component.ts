import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-search-student-by-age',
  templateUrl: './search-student-by-age.component.html',
  styleUrls: ['./search-student-by-age.component.css']
})
export class SearchStudentByAgeComponent  {

  students:Student[];
  startAge:number;
  endAge:number;
  result:boolean;
  totalPages: number;
  currentPage: number = 0;
  private errorMessage: string;
  constructor(private _student:StudentService,private _router:Router) { }




  search(startAge,endAge){
    this.startAge=startAge;
    this.endAge=endAge;
    this.onCurrentPageChange();
  }
    onCurrentPageChange() {
      this._student.searchStudentPageByAge(this.startAge,this.endAge,this.currentPage).subscribe(
        data => {
          this.students = data['content']
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
  
  
  detailsStudent(id){
    
    this._router.navigate(['details-student',id]);
  }

}
