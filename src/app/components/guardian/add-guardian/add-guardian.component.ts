import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { Guardian } from 'src/app/models/guardian';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CacheService } from 'src/app/services/cache.service';
import { AddStudentComponent } from '../../student/add-student/add-student.component';

@Component({
  selector: 'add-guardian',
  templateUrl: './add-guardian.component.html',
  styleUrls: ['./add-guardian.component.css']
})
export class AddGuardianComponent implements OnInit{


@Input() data

  guardian = new Guardian();

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    ssn: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    gender: new FormControl('', Validators.required),
    // email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
    email: new FormControl('', [Validators.required]),
    notes: new FormControl('', [])
  });

   
 
   constructor(){
     }
  ngOnInit(): void {
    if(this.data!=null)
    this.guardian=this.data;
    //Set Gender coming from  Student Guardian Object 
    console.log(this.guardian.gender)
    this.formData.controls['gender'].setValue(this.guardian.gender);
    // this.controls.gender.setValue(this.guardian.gender);
  }
  
  
  get controls() {
    return this.formData.controls;
  }

  handleGenderChange(event: any) {
    this.guardian.gender = this.controls.gender.value;
  }

  /**
   * pass current object that carry all data to caller object
   */
  getCurrentObject(): Guardian {
    // this.guardian=this.data;
    return this.guardian;
  }


  isValid(): boolean {
    return this.formData.valid;
  }

}
