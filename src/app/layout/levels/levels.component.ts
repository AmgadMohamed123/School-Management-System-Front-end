import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {
  items:Level[];
  //  levelName:string;
  constructor(private _level:LevelService) {
    this._level.getLevels().subscribe(
      data=>this.items= data),
      err=>console.log(err)

   }

  ngOnInit(): void {
  
    
  }


//toggle A single selection
  // toggleLevel(level){
  //   this.level=level;
  // }

  // getSelectedLevel(){
  //   return this.level; 
  // }

//toggle Multi selection
public toggleItem(event: any, item: Level) {
  //if control is clicked opposite class isDone
  if (event.getModifierState && event.getModifierState('Control')) {
    item['isDone'] = item['isDone'] == true ? false : true;
  
  } else {
    this.items.filter(item => item['isDone']).filter(item => delete item['isDone']);
    item['isDone'] = item['isDone'] == true ? false : true;
  }
}

getSelectedItems(): Level[] {
  // don't forget to declare new key word  OR get undefined
  let selected = new Array<Level>();
  if (this.items) {
    //Return items which have class isDone
    this.items.filter(item => {
      if (item['isDone']) {
        selected.push({ id: item.id, name: item.name, currentSize: item.currentSize, floor: item.floor, maxSize: item.maxSize })
      }
    })
  }
  return selected;
}

}
