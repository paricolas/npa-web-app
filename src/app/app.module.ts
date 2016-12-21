import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//directives
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './shared/footer/footer.component';

//fnctional modules
import { PeopleModule } from './people/people.module';


// angular firebase
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import { TestComponent } from './test/test.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAGtcBlrFo7UUY725WHHraaRIA0WMdWMhY",
    authDomain: "npa-web-app-68818.firebaseapp.com",
    databaseURL: "https://npa-web-app-68818.firebaseio.com",
    storageBucket: "npa-web-app-68818.appspot.com",
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TestComponent,



  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PeopleModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
