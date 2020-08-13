import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Level } from 'src/app/models/level';
import * as $ from 'jquery';

import { LevelService } from 'src/app/services/level.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent implements OnInit,OnDestroy{
  myLevel=new Level();

    addForm=new FormGroup({
    name:new FormControl('',Validators.required),
    floor:new FormControl('',Validators.required),
    maxSize:new FormControl('',Validators.required),
    currentSize:new FormControl('',Validators.required),
})





  constructor(private _level:LevelService,private cache:CacheService) { 

    if(this.cache.getObject()!=null){
      this.myLevel=this.cache.getObject();
    }

  }
  ngOnDestroy(): void {
    this.cache.setObject(null);
  }

  reset(){
    this.addForm.reset();

  }

  ngOnInit(){
    
  }

  addLevel(){
    this._level.addLevel(this.myLevel).subscribe(
      data=>{
        $(document).ready(() => {
          $('.messagesuccess').css({'font-size': '150%'}).fadeIn(1500).fadeOut(1500),
          this.reset();
          //$('.messagesuccess').fadeIn(3000)
          //   $('.message').fadeIn('fast')
        // }, 1000) 

        })

      }
      ,
      err=> $(document).ready(() => {
        $('.messageerror').css({'font-size': '150%'}).fadeIn(1500).fadeOut(1500)


        //   $('.message').fadeIn('fast')
      // }, 1000) 

      })
      
    )}



    get controls(){
      return this.addForm.controls;
    }

}
