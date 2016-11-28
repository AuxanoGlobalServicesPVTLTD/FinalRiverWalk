import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Auth }                 from './../services/auth.service';

@Component({
    providers: [ Auth ],
    templateUrl: './recommendations.component.html'
})
export class RecommendationsComponent implements OnInit {

    constructor( private router: Router, private auth: Auth  ) { }

    ngOnInit() { }
}

