import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Auth }                 from './../services/auth.service';

@Component({
    providers: [ Auth ],
    templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {

    constructor( private router: Router, private auth: Auth  ) { }
    private shown: string = 'EQUIFAX';

    ngOnInit() { }
}




