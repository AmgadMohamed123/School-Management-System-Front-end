import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import Utils from 'src/app/utils';
import { Student } from 'src/app/models/student';
import { ActivatedRoute, Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent  {

  result:boolean;
  id: number;
  student=new Student();
  level:Level;

    // test if there data
    hasData = false;
  constructor(private _student:StudentService,private cache:CacheService,private route: ActivatedRoute,private router: Router) 
  {
        // grap paramter from route snapshot (url);
    this.id= parseInt(this.route.snapshot.paramMap.get('id'));
    //  grab data from cache  service

    if(Object.keys(this.cache.getObject).length>0){

      this.student=this.cache.getObject();
      this.hasData=true;
    }
    else{
      if(this.id){
this.getById(this.id);
      }
    }
    this.student=this.cache.getObject();

   }

  ngOnInit(): void {
 
  }

  getById(id:number){
    this._student.detailsStudent(this.id).subscribe(
    data => {
      this.student = data;
      this.level=this.student.level;
      this.hasData=this.student.name.length>0?true:this.hasData;
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
  this.router.navigate(['list-student']);
} 


deleteStudent(id){
  this.result=confirm('Are you sure?');
  if(this.result){
  this._student.deleteStudent(id).then(
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

updateStudent(id){
  this.router.navigate(['add-student']);
}



}
