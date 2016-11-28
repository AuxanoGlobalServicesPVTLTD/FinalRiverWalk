import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Auth }                 from './../services/auth.service';

@Component({
    providers: [ Auth ],
    templateUrl: './score-simulator.component.html'
})
export class ScoreSimulatorComponent implements OnInit {

    constructor( private router: Router, private auth: Auth  ) { }

    ngOnInit() { }
}

