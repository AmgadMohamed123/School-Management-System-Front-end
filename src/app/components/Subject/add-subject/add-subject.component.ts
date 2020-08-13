import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit,OnDestroy{

  subject=new Subject();

  formData=new FormGroup(
    {

      name:new FormControl('',Validators.required)
    }
    )
  constructor(private subjectService:SubjectService,private cache:CacheService) { 

    if(this.cache.getObject()!=null){
      this.subject=this.cache.getObject();
    }
  }
  ngOnDestroy(): void {
    this.cache.setObject(null);
  }

  ngOnInit(): void {
    
  }


  get controls(){
    return this.formData.controls;
  }

  reset(){
    this.formData.reset();
  }

  addSubject()
{
  this.subjectService.addSubject(this.subject).subscribe(
    data=>
      $(document).ready(() => {
        $('.messagesuccess').css({'font-size': '150%'}).fadeIn(1000).fadeOut(1000)
        this.reset();
        //$('.messagesuccess').fadeIn(3000)
        //   $('.message').fadeIn('fast')
      // }, 1000) 

      })
    ,
    err=> $(document).ready(() => {
      $('.messageerror').css({'font-size': '150%'}).fadeIn(1000).fadeOut(1000)


      //   $('.message').fadeIn('fast')
    // }, 1000) 

    })
    
  )}
}
