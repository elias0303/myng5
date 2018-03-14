import { Injectable } from '@angular/core';
//to share data as a service in between different compnents
//using liberary behaviorsubjec to share
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private mems=new BehaviorSubject<any>(['Defult Memo']);
  mem=this.mems.asObservable();
  constructor() { }

changeMem(mem){
  this.mems.next(mem);
}
}
