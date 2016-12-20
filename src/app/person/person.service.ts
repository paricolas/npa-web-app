import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/Observable/of';


import { Person } from '../model/person.model'

@Injectable()
export class PersonService {

  constructor(af: AngularFire) {
    this.af = af;
    this.people = this.getPeople();
    
  }

  private af: AngularFire;
  private people: FirebaseListObservable<Person[]>;
  private person: FirebaseListObservable<Person>;
  


  getPeople(): FirebaseListObservable<any> {
    return this.af.database.list('/people');
  }

  getPerson(id: any) : Observable<any> {
    return this.people
      .map(people => people.find(person => person.id === id));
  }

  addPerson(id: string, firstname: string, surname: string, ) {
    var index = firstname+surname;
    index = index.replace(" ","");
    index = index.toUpperCase();
    var position = "";
    this.people.push({ id, firstname: firstname, surname: surname,position:position, index:index });


  }
  updatePerson(key: string, firstname: string, surname: string, position: string) {
    var index = firstname+surname+position;
    index = index.replace(" ","");
    index = index.toUpperCase();
    this.people.update(key, { firstname: firstname, surname: surname, position: position, index:index});
  }
  deletePerson(key: string) {
    this.people.remove(key);
  }

  search(searchSubject): FirebaseListObservable<any> {
    this.people = this.af.database.list('/people', {
        query : {
          orderByChild : 'firstname',
          equalTo : searchSubject
        }
    }); 
    return this.people;
    } 
}
  




