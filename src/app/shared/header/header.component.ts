import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  

})
export class HeaderComponent implements OnInit {

  constructor() { }
    leftItem = "left item label";
    rightItem = "right item label";
  ngOnInit() {
  }

}
