import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-search-level',
  templateUrl: './search-level.component.html',
  styleUrls: ['./search-level.component.css']
})
export class SearchLevelComponent {

  levels:Level[];
  name:string;
  totalPages:number;
  result:boolean;
  currentPage: number = 0;
  private errorMessage: string;
  constructor(private _level:LevelService,private cache:CacheService,private _router:Router) { }
  
  search(name){
    this.name=name;
    console.log(this.name);
    this.onCurrentPageChange();
  }
    onCurrentPageChange() {
      this._level.searchLevelPage(this.name,this.currentPage).subscribe(
        data => {
          this.levels = data['content']
          this.totalPages = data['totalPages']
          console.log(data)
        },
        error => {
          this.errorMessage = error
          console.log(this.errorMessage)
        }
      );
    }

        
      detailsLevel(level){
        
        this.cache.setObject(level);
         this._router.navigate(['details-level']);
 
 

     }
  
  
  First() {
    this.currentPage = 0;
    this.onCurrentPageChange();
  }


  Previous() {
    this.currentPage > 0 ? this.currentPage-- : this.currentPage
    this.onCurrentPageChange();
  }

  Next() {
    this.currentPage < this.totalPages - 1 ? this.currentPage++ : this.currentPage
    this.onCurrentPageChange()
  }

  Last() {
    this.currentPage = this.totalPages - 1;
    this.onCurrentPageChange()
  }


  
  
}
