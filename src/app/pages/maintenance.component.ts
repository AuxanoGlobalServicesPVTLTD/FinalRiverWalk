import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'maintenance.component.html',
})
export class MaintenanceComponent {

  constructor() { }
  public isCollapsed:boolean = true;
  public isCollapsed1:boolean = true;
  public isCollapsed2:boolean = true;
 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }

}