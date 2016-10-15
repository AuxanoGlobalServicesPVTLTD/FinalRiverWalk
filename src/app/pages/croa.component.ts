import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'croa.component.html',
})
export class CroaComponent {

  constructor() { }
  public isCollapsed:boolean = true;
  public isCollapsed1:boolean = true;
  public isCollapsed2:boolean = true;
  public isCollapsed3:boolean = true;
  public isCollapsed4:boolean = true;
  public isCollapsed5:boolean = true;
  public isCollapsed6:boolean = true;
  public isCollapsed7:boolean = true;
  public isCollapsed8:boolean = true;
  public isCollapsed9:boolean = true;
  public isCollapsed10:boolean = true;
  public isCollapsed11:boolean = true;
  public isCollapsed12:boolean = true;
 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }
	
}
