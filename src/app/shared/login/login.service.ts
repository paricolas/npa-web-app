import { Injectable, Input } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class LoginService {
  af: AngularFire;
  user = {};
  @Input() isConnected: boolean;

  constructor(
    af: AngularFire,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,

  ) {
    this.af = af;

  }

  getConnectionStatus(): boolean {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.isConnected = true;
        this.getRedirection();
      }
      else {
        // user not logged in
        this.isConnected = false;
        this.getRedirection();
      }
    });
    return this.isConnected;
  }

  getLogedIn(email, password) {
    return this.af.auth.login({
      email: email,
      password: password,
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });



  }

  login(email, password) {
    return this.getLogedIn(email, password),
    this.getConnectionStatus();
  }

  logout() {
    this.af.auth.logout();
    this.getConnectionStatus();

  }
  getRedirection() {
    if (this.isConnected == true) {
      if (this.router.url == '/connect') {
        this.router.navigate(['/main']);
      }
    }
    else {
      // clears browser history so they can't navigate with back button
      this.location.replaceState('/');
      this.router.navigate(['/connect']);
    }

  }
}