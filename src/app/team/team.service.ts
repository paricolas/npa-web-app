import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamService {

  constructor(af:AngularFire) {
    this.af = af;
    this.teams = this.af.database.list('/teams');
    this.teams = this.getTeams()
    
   }
   private af :AngularFire;
   private teams :FirebaseListObservable<any>;
   private team :FirebaseListObservable<any>;

getTeams(): FirebaseListObservable<any>{
  return this.teams;
}
}
