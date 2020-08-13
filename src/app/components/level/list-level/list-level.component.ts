import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LevelService } from 'src/app/services/level.service';
import { Level } from 'src/app/models/level';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-list-level',
  templateUrl: './list-level.component.html',
  styleUrls: ['./list-level.component.css']
})
export class ListLevelComponent  {
  result:boolean;
  totalPages: number;
  currentPage: number = 0;
  private errorMessage: string;

levels:Level[];
  constructor(private _level:LevelService,private cache:CacheService,private _router:Router) {
    this.onCurrentPageChange();
   }

  onCurrentPageChange() {
    this._level.getLevelPage(this.currentPage).subscribe(
      data => {
        this.levels = data['content']
        this.totalPages = data['totalPages']
      },
      error => {
        this.errorMessage = error
        console.log(this.errorMessage)
      }
    );
  }




  First() {
    this.currentPage = 0;
    this.onCurrentPageChange()
  }

  Previous() {
    this.currentPage > 0 ? this.currentPage-- : this.currentPage
    this.onCurrentPageChange()
  }

  Next() {
    this.currentPage < this.totalPages - 1 ? this.currentPage++ : this.currentPage
    this.onCurrentPageChange()
  }

  Last() {
    this.currentPage = this.totalPages - 1;
    this.onCurrentPageChange()
  }








     

      detailsLevel(level){
        
       this.cache.setObject(level);
        // this._router.navigate(['update-level',level.id]);
        // this._router.navigate(['add-level']);
        this._router.navigate(['details-level']);

      }


      }
