import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  api_url="http://localhost:8080/subject";


  constructor(private http:HttpClient) { }


//Get Subjects

getSubjects():Observable<any>{

  return this.http.get(`${this.api_url}/`);
 }
 //Add Subject
addSubject(subject):Observable<any>{
  return this.http.post(`${this.api_url}/save`,subject);
}

//delete Subject
// deleteSubject(id):Observable<any>{
//   return this.http.delete(`${this.api_url}/delete/${id}`)
// }

  /**
   * async + wait 
   * to prevent async for data flow  i.e
   * to complete all data flow in retriving data and know each message will retrived then
   * method call it can get final message with sync data flow
   */
  async deleteSubject(id: number): Promise<boolean> {
    let flag: boolean = false;
    await this.http.delete(`${this.api_url}/delete/${id}`, { observe: 'response' }).toPromise()
      .then((response) => {
        response.status === 200 ? flag = true : flag
      }).catch((err) => {
        flag = false;
      });
    return flag;
  }







detailsSubject(id):Observable<any>{
  return this.http.get(`${this.api_url}/byId/${id}`)
}
searchSubject(searchKey,searchType):Observable<any>{
  return this.http.get(`${this.api_url}/${searchKey}/${searchType}`)
}
updateSubject(id,subject):Observable<any>{

 return this.http.put(`${this.api_url}/update/${id}`,subject)
}
getSubjectPage(pageSize: number): Observable<Subject[]> {
  return this.http.get<Subject[]>(`${this.api_url}/page?page=` + pageSize)
}

searchSubjectPage(name:string,pageSize:number): Observable<Subject[]> {
  return this.http.get<Subject[]>(`${this.api_url}/byName/${name}/page?page=` + pageSize)
}
}
