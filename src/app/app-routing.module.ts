import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent }  from './main/main.component';
import { ConnectComponent }  from './connect/connect.component';
import { PeopleListComponent }    from './people/people-list.component';
import { AppComponent }    from './app.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'main', component: MainComponent },
      { path: 'connect', component: ConnectComponent },
      { path: 'people', component: PeopleListComponent },
      { path: '',redirectTo: '/main', pathMatch: 'full'},
      { path: '**',redirectTo: '/main', pathMatch: 'full'}
    
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
