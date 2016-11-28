import { Component }            from '@angular/core';
import { Router }    			from '@angular/router';
import { Auth }                 from './../services/auth.service';

@Component({
    selector: 'application-aside',
    templateUrl: './aside.component.html'
})
export class AsideComponent {
	   constructor( private router: Router, private auth: Auth  ) { }

}