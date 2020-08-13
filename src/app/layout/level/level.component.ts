import { Component, OnInit, Input } from '@angular/core';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  // isdone:boolean=false;
  @Input() data
  level=new Level();
  levels:Level[];
  constructor(private _level:LevelService) {
    //  levelName:string;
      this._level.getLevels().subscribe(
        data=>this.levels= data),
        err=>console.log(err)
  
     
   }

  ngOnInit(): void {
    // this.level=this.data;
  }

// //toggle Multi selection
// public toggleItem(event: any, item: Level) {
//   //if control is clicked opposite class isDone
//   // if (event.getModifierState && event.getModifierState('Control')) {
//   //   item['isDone'] = item['isDone'] == true ? false : true;
//   // } 
//     this.levels.filter(item => item['isDone']).filter(item => delete item['isDone']);
//     item['isDone'] = item['isDone'] == true ? false : true;
  
// }

// getSelectedItems(): Level[] {
//   // don't forget to declare new key word  OR get undefined
//   let selected = new Array<Level>();
//   if (this.levels) {
//     //Return items which have class isDone
//     this.levels.filter(item => {
//       if (item['isDone']) {
//         selected.push({ id: item.id, name: item.name, currentSize: item.currentSize, floor: item.floor, maxSize: item.maxSize })
//       }
//     })
//   }
//   return selected;
// }











  //toggle A single selection
  toggleLevel(level){
        
    this.levels.filter(level => level['isDone']).filter(level => delete level['isDone']);
    level['isDone'] = level['isDone'] == true ? false : true;
    this.level=level;
    }

// getSelectedItems(): Level[] {
//   // don't forget to declare new key word  OR get undefined
//   let selected = new Array<Level>();
//   if (this.levels) {
//     //Return items which have class isDone
//     this.levels.filter(item => {
//       if (item['isDone']) {
//         selected.push({ id: item.id, name: item.name, currentSize: item.currentSize, floor: item.floor, maxSize: item.maxSize })
//       }
//     })
//   }
//   return selected;
// }








// public toggleLevel(level) {

//   this.level=level;
//  }

 public getSelectedLevel() {
   return this.level;
 }



}
