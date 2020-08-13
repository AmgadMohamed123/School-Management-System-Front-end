import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private object=new Object();
  constructor() { }

  setObject(object:any){
    this.object=object;
  }

  getObject():any{
    return this.object;
  }



}
