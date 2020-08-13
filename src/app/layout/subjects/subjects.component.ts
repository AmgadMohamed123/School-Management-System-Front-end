import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects=[];
  subject=new Subject();
  name:string;
  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      data=>this.subjects=data,
      err=>console.log(err)
    )
  }

  public toggleSubject(subject) {
    // toggle between selected or not
    //  level.isDone = !level.isDone;
    this.subject=subject;
    console.log(this.subject);
   }

   public getSelectedSubject() {
     return this.subject;
     // return Utils.getSelectedNames(this.complaints);
//    console.log(this.levels.filter(level=>level['isDone']))//Get selected level only whose flag(isDone) is true
 }


}
