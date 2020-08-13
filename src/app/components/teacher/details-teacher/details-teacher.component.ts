import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { Subject } from 'src/app/models/subject';
import * as $ from 'jquery';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-details-teacher',
  templateUrl: './details-teacher.component.html',
  styleUrls: ['./details-teacher.component.css']
})
export class DetailsTeacherComponent  implements OnInit {

  result:boolean;
  id: number;
  teacher=new Teacher();
  level:Level;
  subject:Subject;
  levels:Level[];

    // test if there data
    hasData = false;
  constructor(private teacherService:TeacherService,private cache:CacheService,private route: ActivatedRoute,private router: Router) 
  {
        // grap paramter from route snapshot (url);
    this.id= parseInt(this.route.snapshot.paramMap.get('id'));
    //  grab data from cache  service

    if(Object.keys(this.cache.getObject).length>0){

      this.teacher=this.cache.getObject();
      this.hasData=true;
    }
    else{
      if(this.id){
this.getById(this.id);
      }
    }
    this.teacher=this.cache.getObject();

   }

  ngOnInit(): void {
 
  }

  getById(id:number){
    this.teacherService.detailsTeacher(this.id).subscribe(
    data => {
      this.teacher = data;
      this.levels=this.teacher.levels;
      this.hasData=this.teacher.name.length>0?true:this.hasData;
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
  this.router.navigate(['list-teacher']);
} 


deleteTeacher(id){
  this.result=confirm('Are you sure?');
  if(this.result){
  this.teacherService.deleteTeacher(id).then(
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

updateTeacher(id){
  this.router.navigate(['add-teacher'],id);
}


  
  }


