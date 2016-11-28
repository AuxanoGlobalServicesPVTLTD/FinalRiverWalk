import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Auth }                 from './../services/auth.service';
import { Payment }    			from '../models/payment';

@Component({
    providers: [ Auth ],
    templateUrl: './payment-method.component.html'
})
export class PaymentMethodComponent implements OnInit {

    constructor( private router: Router, private auth: Auth  ) { }

    // Credit Card Form 
	payment = new Payment('', '', '', '', '', '');
	paymentSubmitted = false;
  	paymentSubmit() { this.paymentSubmitted = true; }
  	paymentActive = true;
    cardTypes = ['American Express', 'Discover', 'Master Card', 'Visa'];
  	expMonths = ['January','February','March','April','May','June','July','August','September', 'October','November','December'];
    expYears = ['2016','2017', '2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035','2036','2037','2038','2039', '2040','2041','2042','2043','2044','2045','2046','2047','2048','2049','2050','2051'];

    ngOnInit() { }
}

