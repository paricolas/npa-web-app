import { Component, OnInit, NgModule, Input, trigger, state, style, transition, animate, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Person } from '../person/person.model';
import { PersonService } from '../person/person.service';
import { TeamService } from '../team/team.service';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
    styleUrls: ['./people-list.component.scss'],
    providers: [
        [PersonService, TeamService],
    ],

    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(100)
            ])
        ]),
        trigger('flyUpDown', [
            state('down', style({ transform: 'translateY(0)' })),
            transition('void => *', [
                style({ transform: 'translateY(100%)' }),
                animate(300)
            ]),
            transition('* => void', [
                animate(300, style({ transform: 'translateY(100%)' }))
            ])
        ]),

        trigger('personState', [
            state('inactive', style({
                transform: 'scale(1)'
            })),
            state('active', style({
                background: 'linear-gradient(30deg, darkred,lightgrey 70%,white 90%)',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),
    ]

})
@Injectable()
export class PeopleListComponent implements OnInit {
    people: Observable<Person[]>;
    person: Person;
    selectedPerson: Person;
    timeStamp: string
    peopleCounter: number;
    id: string;
    firstname: string;
    surname: string;
    position: string;
    addPersonTitle: string;
    addTeamBoolean: boolean;
    searchSubject: string;
    mySubject: string;
    loading: boolean;


    constructor(

        private teamService: TeamService,
        private personService: PersonService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,

    ) {
        this.addPersonTitle = "Add a person"

        this.firstname = '';
        this.surname = '';
        this.addTeamBoolean = false;
        this.searchSubject = "";
        this.loading = false;
    };



    getPeople(): Observable<Person[]> {
        this.loading = true;
        if (this.searchSubject != "") {

            this.people = this.personService.getPeople();

            this.people = this.people.map(people => people.filter(
                person => person.surname.toUpperCase().includes(this.mySubject)
                    || person.firstname.toUpperCase().includes(this.mySubject)
                    || person.position.toUpperCase().includes(this.mySubject)
            ))

        }

        else this.people = this.personService.getPeople();
        this.loading = false;
        return this.people;

    }

    ngOnInit() {
        this.getPeople();
        this.getCount();
        // this.getTeams();
    }

    goBack(): void {
        this.location.back();
    }
    addPerson(firstname: string, surname: string) {
        surname = surname.toUpperCase();
        firstname = firstname.charAt(0).toUpperCase() + firstname.substring(1);
        this.id = new Date().getTime().toString()
        this.personService.addPerson(this.id, firstname, surname);
        this.personService.getPerson(this.id).subscribe(person => this.person = person);
        this.selectPerson(this.person);

        this.firstname = "";
        this.surname = "";
        this.timeStamp = "";
    }

    deletePerson(key: string): void {
        this.personService.deletePerson(key),
            this.selectedPerson = null;
    }

    getCount() {
        this.people.forEach(person => {
            this.peopleCounter = person.length
        })
    }

    showAddButton() {
        return (this.firstname != '' && this.surname != '');
    }

    showSaveButton() {
        return (this.selectedPerson.firstname != '' && this.selectedPerson.surname != '');
    }

    // person selection
    selectPerson(person: Person): void {

        if (this.selectedPerson != null) {
            this.unselectPerson();
        }
        this.selectedPerson = person;
        this.selectedPerson.state = 'active';
        this.addTeamBoolean = false;

    }

    unselectPerson(): void {
        this.selectedPerson.state = 'inactive';
        this.selectedPerson = null;
        this.addTeamBoolean = false;

    }

    save(key, firstname: string, surname: string, position: string): void {
        var surname = surname.toUpperCase();
        var firstname = firstname.charAt(0).toUpperCase() + firstname.substring(1);
        this.personService.updatePerson(key, firstname, surname, position);
        this.getPeople();
    }

    //team management
    // getTeams(): void {
    //   this.teams = this.teamService.getTeams();
    // }

    toggleTeamForm(boolean: boolean) {
        this.addTeamBoolean = boolean;
    }

    showAddTeamForm() {
        return (this.addTeamBoolean != false);
    }

    //search
    searchPerson(searchSubject: string) {
        this.mySubject = searchSubject.toUpperCase();
        this.getPeople();
    }
}


