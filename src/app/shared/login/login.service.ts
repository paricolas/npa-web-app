import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class LoginService {
  isConnected: boolean
  af: AngularFire;
  user = {};

  constructor(
    af: AngularFire,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    
  ) {
    this.af = af;
    // this.isConnected =true;
  }

  getConnectionStatus() {
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.isConnected = true;
        
      }
      else {
        // user not logged in
        this.isConnected = false;
        this.getRedirection();
      }
    });
    
  }

  login(email, password) {
    this.af.auth.login({
      email: email,
      password: password,
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
    this.getConnectionStatus();
    this.getRedirection();
    
  }

  logout() {
    this.af.auth.logout();
    this.getConnectionStatus();
    
  }
  getRedirection() {
    if (this.isConnected == true){
      this.router.navigate(['/main']);
    }
    else{
      // clears browser history so they can't navigate with back button
    this.location.replaceState('/'); 
    this.router.navigate(['/connect']);
    }
    
  }
}