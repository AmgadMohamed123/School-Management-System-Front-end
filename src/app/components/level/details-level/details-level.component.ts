import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level.service';
import { CacheService } from 'src/app/services/cache.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-details-level',
  templateUrl: './details-level.component.html',
  styleUrls: ['./details-level.component.css']
})
export class DetailsLevelComponent implements OnInit {


    result:boolean;
  id: number;
  level:Level;
 
    // test if there data
    hasData = false;
  constructor(private _level:LevelService,private cache:CacheService,private route: ActivatedRoute,private router: Router) 
  {
        // grap paramter from route snapshot (url);
    this.id= parseInt(this.route.snapshot.paramMap.get('id'));
    //  grab data from cache  service

    if(Object.keys(this.cache.getObject).length>0){

      this.level=this.cache.getObject();
      this.hasData=true;
    }
    else{
      if(this.id){
this.getById(this.id);
      }
    }
    this.level=this.cache.getObject();

   }

  

  getById(id:number){
    this._level.detailsLevel(this.id).subscribe(
    data => {
      this.level = data;
      this.hasData=this.level.name.length>0?true:this.hasData;
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
  this.router.navigate(['list-level']);
} 


deleteLevel(id){
  this.result=confirm('Are you sure?');
  if(this.result){
  this._level.deleteLevel(id).subscribe(
    data=>{
      $(document).ready(() => {
        $('.messagesuccess').css({'font-size': '150%'}).fadeIn(1000).fadeOut(1000)      

      })
  }
  ,
    err=> $(document).ready(() => {
      $('.messageerror').css({'font-size': '150%'}).fadeIn(1000).fadeOut(1000)


    })
  )
}
} 

updateLevel(id){
  this.router.navigate(['add-level']);
}

  ngOnInit(): void {
  }

}
