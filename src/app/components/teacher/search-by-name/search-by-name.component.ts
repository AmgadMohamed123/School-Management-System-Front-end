import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent  {

  teachers:Teacher[];
  name:string;
  result:boolean;
  totalPages: number;
  currentPage: number = 0;
  private errorMessage: string;
  constructor(private _teacher:TeacherService,private cache:CacheService,private _router:Router) { }




  search(name){
    this.name=name;
  console.log(this.name);
    this.onCurrentPageChange();
  }
    onCurrentPageChange() {
      this._teacher.searchTeacherPagebyName(this.name,this.currentPage).subscribe(
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
  
  
  detailsTeacher(teacher:Teacher){
        
    this.cache.setObject(teacher);
    this._router.navigate(['details-teacher',teacher.id]);
  }



}
