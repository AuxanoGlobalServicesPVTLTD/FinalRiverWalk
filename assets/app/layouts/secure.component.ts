import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { Auth }      				from './../services/auth.service';

@Component({
	providers: [ Auth ],
    selector: 'app-dashboard',
    templateUrl: './secure.component.html'
})
export class SecureComponent implements OnInit {

    constructor( private router: Router, private auth: Auth ) { }

    ngOnInit(): void { }
}
