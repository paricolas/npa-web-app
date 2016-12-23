import { Component, OnInit, NgModule, Input, trigger, state, style, transition, animate, Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { LoginService } from './login.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    [LoginService],
  ],

  animations: [
    trigger('display', [
      state('in', style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(0)', opacity: 0 }),
        animate(300)
      ]),

    ])]
})
@Injectable()
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;
  private isConnected: boolean;



  constructor(

    public loginService: LoginService,

  ) {
    this.email = '',
      this.password = ''
    this.isConnected = this.loginService.isConnected;


  }

  ngOnInit() {



  }

  login() {
    this.loginService.login(this.email, this.password);



  }

  logout() {
    this.loginService.logout();
    this.email = "";
    this.password = "";


  }

  showLoginButton() {
    return (this.loginService.isConnected == false)
  }

  showGoButton() {
    return (this.email != '' && this.password != '');
  }
  getConnectionStatus() {
    this.isConnected = this.loginService.isConnected;
  }


}