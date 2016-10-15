import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'tips.component.html',
})
export class TipsComponent {

  constructor() { }
  public isCollapsed:boolean = true;
  public isCollapsed1:boolean = true;
  public isCollapsed2:boolean = true;
  public isCollapsed3:boolean = true;
  public isCollapsed4:boolean = true;
  public isCollapsed5:boolean = true;
 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }

}
