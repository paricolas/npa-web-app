import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }   from './app-routing.module';

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
  apiKey: "AIzaSyBrKvcm62pXxPecV2-_wLslM99YlNKeFHc",
    authDomain: "test-firebase-8fa5a.firebaseapp.com",
    databaseURL: "https://test-firebase-8fa5a.firebaseio.com",
    storageBucket: "test-firebase-8fa5a.appspot.com"

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
