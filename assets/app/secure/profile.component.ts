import { Component, OnInit }       from '@angular/core';
import { Router }                  from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Auth }                    from './../services/auth.service';
import { Personal }    			       from '../models/personal';
import { Address }    			       from '../models/address';

import { Injectable }                      from '@angular/core';
import { tokenNotExpired, JwtHelper }      from 'angular2-jwt';
import { myConfig }                        from './auth.config';
import { User }                            from '../models/user';

@Component({
    providers: [ Auth ],
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

    constructor( private router: Router, private auth: Auth, private http: Http  ) { }

// Address form 
	personal = new Personal('', '', '', '', '', '', '', '', '', '', '');
	personalSubmitted = false;
  	personalSubmit() { this.personalSubmitted = true; }
  	personalActive = true;

// Address form 
	address = new Address('', '', '', '', '');
	
  addressSubmitted = false;
  	
     addressSubmit() {
      this.addressSubmitted = true; 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.address.street = "Testing";

      return this.http
      .post('http://localhost:4200/api/addAddress', 
        this.address, 
        { headers: headers })
      .subscribe();
    }

  	addressActive = true;
  	states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
    
    ngOnInit() { }
}
