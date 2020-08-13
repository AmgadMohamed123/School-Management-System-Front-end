import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject.service';
import { CacheService } from 'src/app/services/cache.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-subject',
  templateUrl: './details-subject.component.html',
  styleUrls: ['./details-subject.component.css']
})
export class DetailsSubjectComponent implements OnInit {


  result:boolean;
  id: number;
  subject:Subject;
 
    // test if there data
    hasData = false;
  constructor(private _subject:SubjectService,private cache:CacheService,private route: ActivatedRoute,private router: Router) 
  {
        // grap paramter from route snapshot (url);
    this.id= parseInt(this.route.snapshot.paramMap.get('id'));
    //  grab data from cache  service

    if(Object.keys(this.cache.getObject).length>0){

      this.subject=this.cache.getObject();
      this.hasData=true;
    }
    else{
      if(this.id){
this.getById(this.id);
      }
    }
    this.subject=this.cache.getObject();

   }

  

  getById(id:number){
    this._subject.detailsSubject(this.id).subscribe(
    data => {
      this.subject = data;
      this.hasData=this.subject.name.length>0?true:this.hasData;
    }, error => console.log(error)
   )

  }


    /**
   * cache object 
   */
  persistObject() {
    // this.cache
  }

 list(){
  this.router.navigate(['list-subject']);
} 


deletesubject(id){
  this.result=confirm('Are you sure?');
  if(this.result){
  this._subject.deleteSubject(id).then(
    data=>{
      $(document).ready(() => {
        $('.messagesuccess').css({'font-size': '150%'}).fadeIn(1000).fadeOut(1000)      
           this.list();
      })
  }
  ,
    err=> $(document).ready(() => {
      $('.messageerror').css({'font-size': '150%'}).fadeIn(1000).fadeOut(1000)


    })
  )
}
} 

updatesubject(id){
  this.router.navigate(['add-subject']);
}


  ngOnInit(): void {
  }

}
