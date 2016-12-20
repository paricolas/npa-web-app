import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(af:AngularFire) { 
    this.af = af;
    this.key = 'adrienlaurence';
    this.people = this.af.database.list('/people');
    
    this.teamItems = this.af.database.object('/people/'+this.key+'/teams');
  }
  people:FirebaseListObservable<any>;
  
  teamItems:FirebaseObjectObservable<any>;
  af:AngularFire;
  key:string;
  ngOnInit() {
  return this.people;    
    
  }


addTeamItem(t:string){
  var newTeam = t;
  this.teamItems.set(newTeam)
}


}
