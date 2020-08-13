import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import * as $ from 'jquery';
import { AddGradeComponent } from '../../grade/add-grade/add-grade.component';
import { AddGuardianComponent } from '../../guardian/add-guardian/add-guardian.component';
import { LevelComponent } from 'src/app/layout/level/level.component';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnDestroy {
  @ViewChild(AddGuardianComponent) guardianValues: any;
  @ViewChild(LevelComponent) levelValues: any;
  @ViewChild(AddGradeComponent) gradeValues:any;
 


  array: any[] = [];
  student:Student= new Student();
  gurdianData:any;
  levelData:any;
  // handleLevel(){

  //   this.student.level=this.levelValues.getSelectedLevel();
  //   console.log(this.student.level.name);
  // }




  setGuardian(){
    this.student.guardian=this.guardianValues.getCurrentObject();
  }

  setLevel(){
    this.student.level=this.levelValues.getSelectedLevel();
  }

  constructor(private studentService:StudentService,private cache:CacheService) {
    if(this.cache.getObject()!=null){
      this.student=this.cache.getObject();
      this.controls.gender.setValue(this.cache.getObject().gender);
        this.gurdianData=this.cache.getObject().guardian;
        this.levelData=this.student.level;
    }
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
    dob:new FormControl(''),
    joinDate:new FormControl(''),
    paidFees:new FormControl('',Validators.required), 
    remainFees:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required)
  }
    )


    get controls() {
      return this.formData.controls;
    }


    handleGenderChange(event:any){

      this.student.gender=this.controls.gender.value;
    }


    addStudent(){
  
      this.setGuardian();
      this.setLevel();
      this.studentService.addStudent(this.student).subscribe(
        data=>
          $(document).ready(() => {
            $('.messagesuccess').css({'font-size': '150%'}).fadeIn(1000).fadeOut(1000)
            //$('.messagesuccess').fadeIn(3000)
            //   $('.message').fadeIn('fast')
          // }, 1000) 
  
          })
  
        
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
