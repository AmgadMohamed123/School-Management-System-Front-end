import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/services/cache.service';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  

  result:boolean;
  student=new Student();
  totalPages: number;
  currentPage: number = 0;
  private errorMessage: string;
   onCurrentPageChange() {
     this._student.getStudentPage(this.currentPage).subscribe(
       data => {
         this.students = data['content']
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
 
 
  students:Student[];
   constructor(private _student:StudentService,private cache:CacheService,private _router:Router) 
   {
     this.onCurrentPageChange()
    }
 
   ngOnInit(): void {
 
   }
 
       
 
     
       detailsStudent(student:Student){
         
         this.cache.setObject(student);
         this._router.navigate(['details-student',student.id]); 
       }
 
      
 
       updateStudent(id){
         this._router.navigate(['update-student',id]);
       }




}
