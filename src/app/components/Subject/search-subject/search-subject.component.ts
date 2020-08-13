import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/models/subject';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-search-subject',
  templateUrl: './search-subject.component.html',
  styleUrls: ['./search-subject.component.css']
})
export class SearchSubjectComponent implements OnInit {

 
  subjects:Subject[];
  name:string;
  result:boolean;
  totalPages: number;
  currentPage: number = 0;
  private errorMessage: string;
  constructor(private _subject:SubjectService,private cache:CacheService,private _router:Router) { }




  search(name){
    this.name=name;
    this.onCurrentPageChange();
  }
    onCurrentPageChange() {
      this._subject.searchSubjectPage(this.name,this.currentPage).subscribe(
        data => {
          this.subjects = data['content']
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
  
  deleteSubject(id){
    this.result=confirm('Are you sure?');
    if(this.result){
    this._subject.deleteSubject(id).then(
      data=>{

          $('.messagesuccess').css({'font-size': '150%'}).fadeIn(1000).fadeOut(1000)
         

      this.onCurrentPageChange();
    }
    ,
      err=>console.log(err)
    )
  }
  }

  detailsSubject(subject){
         
    this.cache.setObject=subject;
    this._router.navigate(['update-subject',subject.id]);
  }
  

  updateSubject(id){
    this._router.navigate(['update-subject',id]);
  }
  

  ngOnInit(){

  }


}
