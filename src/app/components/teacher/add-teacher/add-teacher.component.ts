import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/models/teacher';
import * as $ from 'jquery';
import { Level } from 'src/app/models/level';
import { Subject } from 'src/app/models/subject';
import { LevelsComponent } from 'src/app/layout/levels/levels.component';
import { SubjectsComponent } from 'src/app/layout/subjects/subjects.component';
import { CacheService } from 'src/app/services/cache.service';


@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnDestroy,OnInit {
  // Call All Childs To Handle Data From Them
  @ViewChild(LevelsComponent) levelValues: any;
  @ViewChild(SubjectsComponent) subjectValues:any;

  array: any[] = [];
  teacher=new Teacher();
  level=new Level();
  subject=new Subject();
  //Single Selection
  // handleLevel(){

  //    this.level=this.levelValues.getSelectedLevel();
  //    this.teacher.level=this.level.name;
  //   //  console.log(this.teacher.level);
  // }

  //Multi Selection
 setLevel(){
    this.teacher.levels=this.levelValues.getSelectedItems();
  }

  handleSubject(){

    this.subject=this.subjectValues.getSelectedSubject();
    this.teacher.subject=this.subject.name;
  }
  constructor(private teacherService:TeacherService,private cache:CacheService) {
    if(this.cache.getObject()!=null){
      this.controls.gender.setValue(this.cache.getObject().gender);
      this.controls.maritalStatus.setValue(this.cache.getObject().maritalStatus);
      this.controls.birthDate.setValue(this.cache.getObject().birthDate);
      console.log(this.cache.getObject().hireDate)
      this.controls.hireDate.setValue(this.cache.getObject().hireDate);

      console.log(this.cache.getObject().subject)
      
      this.teacher=this.cache.getObject();
    }
   }
  ngOnInit(): void {
  

  }
  ngOnDestroy(): void {

    this.cache.setObject(null);
  }

  formData=new FormGroup(
    {
    name:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    maritalStatus:new FormControl('',Validators.required),
    birthDate:new FormControl(''),
    hireDate:new FormControl(''),
    salary:new FormControl('',Validators.required),
    specialization:new FormControl('',Validators.required),
    ssn:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',Validators.required),
    degree:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    qualification:new FormControl('',Validators.required),
    yearsOfExperience:new FormControl('',Validators.required),
    subject:new FormControl(''),
  }
    )


    reset(){
      this.formData.reset();
  
    }


    get controls() {
      return this.formData.controls;
    }

    handleGenderChange(event:any){

      this.teacher.gender=this.controls.gender.value;
    }

    handleMaritalStatusChange(event:any){

      this.teacher.maritalStatus=this.controls.maritalStatus.value;
    }

    // getCurrentObject() {
    //   this.setLevel();
    
    // }
    addTeacher(){

      // this.getCurrentObject();
      this.handleSubject();
      //  this.setLevel();
      this.teacherService.addTeacher(this.teacher).subscribe(
        data=>{
          $(document).ready(() => {
            
            $('.messagesuccess').css({'font-size': '150%'}).fadeIn(1500).fadeOut(2000)
            // this.reset();
            
            //$('.messagesuccess').fadeIn(3000)
            //   $('.message').fadeIn('fast')
          // }, 1000) 
  
          })
  
        }
        ,
        err=> $(document).ready(() => {
          $('.messageerror').css({'font-size': '150%'}).fadeIn(1500).fadeOut(2000)
  
  
          //   $('.message').fadeIn('fast')
        // }, 1000) 
  
        })
        
      )}
  

    
      parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    }
    

}
