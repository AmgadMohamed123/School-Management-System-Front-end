import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { CacheService } from 'src/app/services/cache.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-search-student-by-name',
  templateUrl: './search-student-by-name.component.html',
  styleUrls: ['./search-student-by-name.component.css']
})
export class SearchStudentByNameComponent  {

  students:Student[];
  name:string;
  result:boolean;
  totalPages: number;
  currentPage: number = 0;
  private errorMessage: string;
  constructor(private _student:StudentService,private cache:CacheService,private _router:Router) { }




  search(name){
    this.name=name;
  console.log(this.name);
    this.onCurrentPageChange();
  }
    onCurrentPageChange() {
      this._student.searchStudentPagebyName(this.name,this.currentPage).subscribe(
        data => {
          this.students = data['content']
          this.totalPages = data['totalPages']
          // $('.messageerror').css({'font-size': '150%'}).fadeOut(1000)
        },
        error => {
          this.errorMessage = error
          $(document).ready(() => {
            //$('.messagesuccess').fadeIn(3000)
            //   $('.message').fadeIn('fast')
          // }, 1000) 
  
          }) 
               }
               ,
               ()=>{ $('.messageerror').css({'font-size': '150%'}).fadeIn(1000).fadeOut(2000)}
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
  
  
  detailsStudent(student:Student){
        
    this.cache.setObject(student);
    this._router.navigate(['details-student',student.id]);
  }


}
