import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'building.component.html',
})
export class BuildingComponent {

  constructor() { }
  public isCollapsed:boolean = true;
  public isCollapsed1:boolean = true;
  public isCollapsed2:boolean = true;
  public isCollapsed3:boolean = true;
 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }

}
