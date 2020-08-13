import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent{

  result:boolean;
  totalPages: number;
  currentPage: number = 0;
  private errorMessage: string;
   onCurrentPageChange() {
     this._subject.getSubjectPage(this.currentPage).subscribe(
       data => {
         this.subjects = data['content']
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
 
 
 subjects:Subject[];
   constructor(private _subject:SubjectService,private cache:CacheService,private _router:Router) 
   {
     this.onCurrentPageChange()
    }
 
 
       
    
 
     
       detailsSubject(subject){
         
         this.cache.setObject(subject);
         this._router.navigate(['details-subject']);
       }
 
      
 
       updateSubject(id){
         this._router.navigate(['update-subject',id]);
       }
}
