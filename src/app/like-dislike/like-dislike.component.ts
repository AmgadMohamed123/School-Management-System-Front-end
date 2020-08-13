import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {
  likesCounter=100;
  dislikesCounter=25;
  increase=false;
  decrease=false;
  increaseLikes(){
    
      this.increase=!this.increase;
      if(this.decrease){
        this.decrease=!this.decrease;
      }
       if(this.increase){
       this.likesCounter+=1;
       this.dislikesCounter-=1;
       }else
       this.likesCounter-=1;
    }
  increaseDislikes(){
    this.decrease=!this.decrease;
    if(this.increase){
      this.increase=!this.increase;
    }
    if(this.decrease){
    this.dislikesCounter+=1;
    this.likesCounter-=1;
    }else{
    this.dislikesCounter-=1;  
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
