import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[LoginService],
})

@Injectable()
export class MainComponent implements OnInit {

  constructor(
    private loginService:LoginService,
  ) { }

  ngOnInit() {
    this.loginService.getConnectionStatus();
  }

}
