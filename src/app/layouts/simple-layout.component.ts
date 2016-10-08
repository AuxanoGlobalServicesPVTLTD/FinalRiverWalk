import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './simple-layout.component.html'
})
export class SimpleLayoutComponent implements OnInit {

    constructor( private router: Router ) { }

    ngOnInit(): void { }
}
