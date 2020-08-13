import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private message: string;

  private url: string="http://localhost:8080/student";
  constructor(private http: HttpClient) {

  }

    /**
   * collect all student data and send it to server side to add new student to database
   * @param studentData : student details + images
   */
  public migratePatientDataToServer(studentData: FormData) {
    this.http.post(`${this.url}/addStudentData`, studentData, { observe: 'response' })
      .subscribe(response => {
        if (response.status === 200) {
          this.message = 'Student Added successfully';
          alert(this.message)
          console.log(this.message);
        } else {
          this.message = 'Student not Added successfully';
          alert(this.message)
          console.log(this.message);
        }
      }
        , err => {
          this.message = 'Student not Added successfully';
          alert(this.message)
        });
  }

  /**
   * @param studentDetails : Student details without images
   */
  public migrateStudentDetailsToServer(studentDetails: Student) {
    this.http.post(`${this.url}/addStudentDetails`, studentDetails, { observe: 'response' })
      .subscribe(response => {
        if (response.status === 200) {
          this.message = 'Student Added successfully';
          alert(this.message);
          console.log(this.message);
        } else {
          this.message = 'Student not Added successfully';
          alert(this.message);
          console.log(this.message);
        }
      }, err => {
        this.message = 'Student not Added successfully';
        console.log(err);
        alert(this.message);
      });
  }

    /**
 * API to get patient images through its id
 */
// public retriveStudentDataFromServer(id: number) {
//   return this.http.get(`${this.url}/getStudentData/${id}`);
// }
public getStudentDataById(id: number):Observable<any> {
  return this.http.get(`${this.url}/getStudentData/${id}`);
}

public getStudentImagesById(id: number) {
  return this.http.get(`${this.url}/studentImagesById/${id}`);
}


detailsStudent(id):Observable<any>{
  return this.http.get(`${this.url}/byId/${id}`)
}

 //Add Level
 addStudent(student):Observable<any>{
  return this.http.post(`${this.url}/save`,student);
}

//Get Students
getStudents():Observable<any>{
  return this.http.get(`${this.url}/`); 
 }

 //delete Student
// deleteStudent(id):Observable<any>{
//   return this.http.delete(`${this.url}/delete/${id}`)
// }
  /**
   * async + wait 
   * to prevent async for data flow  i.e
   * to complete all data flow in retriving data and know each message will retrived then
   * method call it can get final message with sync data flow
   */
  async deleteStudent(id: number): Promise<boolean> {
    let flag: boolean = false;
    await this.http.delete(`${this.url}/delete/${id}`, { observe: 'response' }).toPromise()
      .then((response) => {
        response.status === 200 ? flag = true : flag
      }).catch((err) => {
        flag = false;
      });
    return flag;
  }




 //search Student

searchStudent(searchKey,searchType):Observable<any>{
  return this.http.get(`${this.url}/byName/${searchKey}/${searchType}`)
}
 //update Student
updateStudent(id,sudent):Observable<any>{

 return this.http.put(`${this.url}/update/${id}`,sudent)
}

getStudentPage(pageSize: number): Observable<Student[]> {
  return this.http.get<Student[]>(`${this.url}/page?page=` + pageSize)
}
async deleteStudentById(id: number): Promise<boolean> {
  let flag: boolean = false;
  await this.http.delete(`${this.url}/delete/${id}`, { observe: 'response' }).toPromise()
    .then((response) => {
      response.status === 200 ? flag = true : flag
    }).catch((err) => {
      flag = false;
    });
  return flag;
}

searchStudentPagebyName(name:string,pageSize:number): Observable<Student[]> {
  return this.http.get<Student[]>(`${this.url}/byName/${name}/page?page=` + pageSize)
}

searchStudentPageByAge(startAge:number,endAge:number,pageSize:number):Observable<Student[]>{
  return this.http.get<Student[]>(`${this.url}/byAge/${startAge}/${endAge}/page?page=`+pageSize);
}



}
