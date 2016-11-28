import { Injectable }                      from '@angular/core';
import { tokenNotExpired, JwtHelper }      from 'angular2-jwt';
import { Router }                          from '@angular/router';
import { myConfig }                        from './auth.config';
import { Http, Response, Headers } from '@angular/http';
import { User }                            from '../models/user';

declare var Auth0Lock: any;

var options = {
    theme: {
    logo: '/img/logo.png',
    primaryColor: '#779476'
    },
    languageDictionary: {
    emailInputPlaceholder: "email@example.com",
    title: "Login or SignUp"
  }, 
 };

@Injectable()
export class Auth {
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, options, {});
  userProfile: Object;
  user: User;

  constructor(private router: Router, private http: Http ) {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('access_token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
          return;
        }
        
        // create users
        this.user = new User(profile.email);   
        this.checkRegister(this.user).subscribe((res)=>{
            //do something with the response here
            console.log(res);
        });


        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        this.router.navigateByUrl('/overview');
      });
      this.lock.hide();
    });
  }

  public checkRegister(User) {
    console.log(User);
    let body =  JSON.stringify(this.user);
    let headers = new Headers(); 
    headers.append('Content-Type', 'application/json');
      
      return this.http
      .post('http://localhost:4200/api/checkRegister', 
        body, 
        { headers: headers })
      .map((res:Response) => res.json());
  }
  
  public login() {
    this.lock.show();
  }
  
  private get accessToken(): string {
        return localStorage.getItem('access_token');
    }

  public authenticated(): boolean {
    try {
        var jwtHelper: JwtHelper = new JwtHelper();
        var token = this.accessToken;
        if (jwtHelper.isTokenExpired(token))
            return false;
        return true;
    }
    catch (err) {
        return false;
    }
  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('access_token');
    this.userProfile = undefined;
    this.router.navigateByUrl('/home');
  };
}