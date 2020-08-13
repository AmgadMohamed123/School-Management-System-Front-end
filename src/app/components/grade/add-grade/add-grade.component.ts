import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/models/grade';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {





  gradeForm=new FormGroup(
    {
    year:new FormControl('',Validators.required),
    month:new FormControl('',Validators.required),
    degree:new FormControl('',Validators.required),
  }
    )
  
  grade=new Grade();
  
  


  // display Years
   displayYears(){
    
    $(function(){
    var startYear=new Date().getFullYear();
    for(var i=startYear;i>startYear-50;i--){
      $('.years').append('<option value="'+i+'">'+i+'</option>')
    }
  });
}







  // display Months
  displayMonths(){
    
    $(function(){
    for(var i=1;i<=12;i++){
      $('.months').append('<option value="'+i+'">'+i+'</option>')
    }
  });
}


get controls(){
  return this.gradeForm.controls;
}


handleYearChange(event:any){

  this.grade.year=this.controls.year.value;
  console.log(this.grade.year);
}

handleMonthChange(event:any){

  this.grade.month=this.controls.month.value;
  console.log(this.grade.month)
}


add(){
  console.log(this.grade.degree)

}

   ngOnInit(): void {
   this.displayYears();
   this.displayMonths();

   }

}
