import { Component, OnInit } from '@angular/core';
//import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import {DataService} from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText:String='Add';
  memText:string="First Memo";
  mems=[];

  constructor(private _data:DataService) { }

  ngOnInit() {
    //assign dynamic value for itemcount
this._data.mem.subscribe(res =>this.mems=res);
this._data.changeMem(this.mems);
this.itemCount=this.mems.length;

  }

  addNew()
  {
    //push or insert new number to the array
    this.mems.push(this.memText);
    this.memText='';
    this.itemCount=this.mems.length;
    this._data.changeMem(this.mems);
  }

  removeitem(i)
  {
    this.mems.splice(i,1);
    this.itemCount=this.mems.length;
    this._data.changeMem(this.mems);
  }
 
}
