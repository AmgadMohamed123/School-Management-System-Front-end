import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Level } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

api_url="http://localhost:8080/level";


  constructor(private http:HttpClient) { }


//Get Levels

getLevels():Observable<any>{

  return this.http.get(`${this.api_url}/`);
 }
 //Add Level
addLevel(myLevel):Observable<any>{
  return this.http.post(`${this.api_url}/save`,myLevel);
}

//delete Level
deleteLevel(id):Observable<any>{
  return this.http.delete(`${this.api_url}/delete/${id}`)
}

detailsLevel(id):Observable<any>{
  return this.http.get(`${this.api_url}/byId/${id}`)
}
getLevelPage(pageSize: number): Observable<Level[]> {
  return this.http.get<Level[]>(`${this.api_url}/page?page=` + pageSize)
}
searchLevelPage(name:string,pageSize:number): Observable<Level[]> {
  return this.http.get<Level[]>(`${this.api_url}/byName/${name}/page?page=` + pageSize)
}
updateLevel(id,myLevel):Observable<any>{

 return this.http.put(`${this.api_url}/update/${id}`,myLevel)
}
}