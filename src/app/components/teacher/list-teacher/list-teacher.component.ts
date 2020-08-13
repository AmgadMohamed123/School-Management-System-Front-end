import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import * as $ from 'jquery'; 
import { CacheService } from 'src/app/services/cache.service';
@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
 result:boolean;
 teacher=new Teacher();
 totalPages: number;
 currentPage: number = 0;
 private errorMessage: string;
  onCurrentPageChange() {
    this._teacher.getTeacherPage(this.currentPage).subscribe(
      data => {
        this.teachers = data['content']
        this.totalPages = data['totalPages']
      },
      error => {
        this.errorMessage = error
        console.log(this.errorMessage)
      }
    );
  }

  First() {
    this.currentPage = 0;
    this.onCurrentPageChange()
  }

  Previous() {
    this.currentPage > 0 ? this.currentPage-- : this.currentPage
    this.onCurrentPageChange()
  }

  Next() {
    this.currentPage < this.totalPages - 1 ? this.currentPage++ : this.currentPage
    this.onCurrentPageChange()
  }

  Last() {
    this.currentPage = this.totalPages - 1;
    this.onCurrentPageChange()
  }


teachers:Teacher[];
  constructor(private _teacher:TeacherService,private cache:CacheService,private _router:Router) 
  {
    this.onCurrentPageChange()
   }

  ngOnInit(): void {
  //this.getTeachers();
  this.onCurrentPageChange();
  }

      

    
      detailsTeacher(teacher:Teacher){
        
        this.cache.setObject(teacher);
        this._router.navigate(['details-teacher',teacher.id]);
      }

     

      updateTeacher(id){
        this._router.navigate(['update-teacher',id]);
      }
}

