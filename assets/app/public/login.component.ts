import { Component }        from '@angular/core';
import { Auth }      from '../services/auth.service';

@Component({
    providers: [ Auth ],
      selector: 'login',
  template: `<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Auth0 - Angular 2</a>
      <button class="btn btn-primary btn-margin" (click)="auth.login()" *ngIf="!auth.authenticated()">Log In</button>
      <button class="btn btn-primary btn-margin" (click)="auth.logout()" *ngIf="auth.authenticated()">Log Out</button>
    </div>
  </div>
</nav><br><br><br><br><br>
    <h4 *ngIf="auth.authenticated()">You are logged in</h4>
    <h4 *ngIf="!auth.authenticated()">You are not logged in, please click 'Log in' button to login</h4>
  `
})
export class LoginComponent {

    constructor(private auth: Auth) {}

   public ngOnInit() {
   		if (!this.auth.authenticated()) {
   			this.auth.login();
   		}
   };
}
