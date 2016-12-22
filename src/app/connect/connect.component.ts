import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  mainTitle:string;
  secondTitle:string;
  constructor() { 
    this.mainTitle = "Bienvenue sur la NPA Web App"
    this.secondTitle = "Si vous êtes ici, c'est que vous n'êtes pas connectés."
  }

  ngOnInit() {
  }

}
