import { Component, OnInit } from '@angular/core';
import { LevelService } from '../services/level.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Level } from '../models/level';
import { Test } from '../models/test';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  myTest=new Test();

  addForm=new FormGroup({
  name:new FormControl('',Validators.required),
  // floor:new FormControl('',Validators.required),
  // maxSize:new FormControl('',Validators.required),
  // currentSize:new FormControl('',Validators.required),
})



constructor(private _test:TestService) { }


addTest(){
  console.log(this.myTest.name);
  this._test.addTest(this.myTest).subscribe(
     data=>
      $(document).ready(() => {
        $('.messagesuccess').css({'font-size': '150%'}).fadeIn(1500).fadeOut(2000)
        //$('.messagesuccess').fadeIn(3000)
        //   $('.message').fadeIn('fast')
      // }, 1000) 

      })

    ,


     err=> $(document).ready(() => {
      $('.messageerror').css({'font-size': '150%'}).fadeIn(1500).fadeOut(2000)
      //$('.messagesuccess').fadeIn(3000)
      //   $('.message').fadeIn('fast')
    // }, 1000) 

    })

    
  )
}

}