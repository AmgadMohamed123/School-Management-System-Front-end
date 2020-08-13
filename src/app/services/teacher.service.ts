import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  private message: string;

  private url: string="http://localhost:8080/teacher";
  constructor(private http: HttpClient) {

  }

    /**
   * collect all teacher data and send it to server side to add new teacher to database
   * @param teacherData : Teacher details + images
   */
  public migrateTeacherDataToServer(teacherData: FormData) {
    this.http.post(`${this.url}/addTeacherData`, teacherData, { observe: 'response' })
      .subscribe(response => {
        if (response.status === 200) {
          this.message = 'Teacher Added successfully';
          alert(this.message)
          console.log(this.message);
        } else {
          this.message = 'Teacher not Added successfully';
          alert(this.message)
          console.log(this.message);
        }
      }
        , err => {
          this.message = 'Teacher not Added successfully';
          alert(this.message)
        });
  }

  /**
   * @param teacherDetails : Teacher details without images
   */
  public migrateTeacherDetailsToServer(teacherDetails: Teacher) {
    this.http.post(`${this.url}/addTeacherDetails`, teacherDetails, { observe: 'response' })
      .subscribe(response => {
        if (response.status === 200) {
          this.message = 'Teacher Added successfully';
          alert(this.message);
          console.log(this.message);
        } else {
          this.message = 'Teacher not Added successfully';
          alert(this.message);
          console.log(this.message);
        }
      }, err => {
        this.message = 'Teacher not Added successfully';
        console.log(err);
        alert(this.message);
      });
  }

    /**
 * API to get Teacher images through its id
 */
// public retriveTeacherDataFromServer(id: number) {
//   return this.http.get(`${this.url}/getTeacherData/${id}`);
// }
public getTeacherDataById(id: number):Observable<any> {
  return this.http.get(`${this.url}/getTeacherData/${id}`);
}

public getTeacherImagesById(id: number) {
  return this.http.get(`${this.url}/teacherImagesById/${id}`);
}

 //Teacher details
detailsTeacher(id):Observable<any>{
  return this.http.get(`${this.url}/byId/${id}`)
}

 //Add Teacher
 addTeacher(teacher):Observable<any>{
  return this.http.post(`${this.url}/save`,teacher);
}

//Get Teachers
getTeachers():Observable<any>{
  return this.http.get(`${this.url}/`); 
 }

 //delete Teacher
// deleteTeacher(id):Observable<any>{
//   return this.http.delete(`${this.url}/delete/${id}`)
// }





  /**
   * async + wait 
   * to prevent async for data flow  i.e
   * to complete all data flow in retriving data and know each message will retrived then
   * method call it can get final message with sync data flow
   */
  async deleteTeacher(id: number): Promise<boolean> {
    let flag: boolean = false;
    await this.http.delete(`${this.url}/delete/${id}`, { observe: 'response' }).toPromise()
      .then((response) => {
        response.status === 200 ? flag = true : flag
      }).catch((err) => {
        flag = false;
      });
    return flag;
  }
 //search Teacher

searchTeacher(searchKey,searchType):Observable<any>{
  return this.http.get(`${this.url}/byName/${searchKey}/${searchType}`)
}
 //update Teacher
updateTeacher(id,teacher):Observable<any>{

 return this.http.put(`${this.url}/update/${id}`,teacher)
}

getTeacherPage(pageSize: number): Observable<Teacher[]> {
  return this.http.get<Teacher[]>(`${this.url}/page?page=` + pageSize)
}

searchTeacherPagebyName(name:string,pageSize:number): Observable<Teacher[]> {
  return this.http.get<Teacher[]>(`${this.url}/byName/${name}/page?page=` + pageSize)
}

searchTeacherPageByAge(startAge:number,endAge:number,pageSize:number):Observable<Teacher[]>{
  return this.http.get<Teacher[]>(`${this.url}/byAge/${startAge}/${endAge}/page?page=`+pageSize);
}

}
