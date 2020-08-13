import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  api_url="http://localhost:8080/test";


  constructor(private http:HttpClient) { }


//Get Levels

// getLevels():Observable<any>{

//   return this.http.get(`${this.api_url}`);
//  }
 //Add Level
addTest(myTest):Observable<any>{
  return this.http.post(`${this.api_url}/save`,myTest);
}}
