import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent }  from './main/main.component';
import { PeopleListComponent }    from './people/people-list.component';
import { TestComponent } from './test/test.component'


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'main', component: MainComponent },
      { path: 'people', component: PeopleListComponent },
      { path: 'test', component: TestComponent },
      { path: '',redirectTo: '/main', pathMatch: 'full'},
      { path: '**',redirectTo: '/main', pathMatch: 'full'}
    
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
