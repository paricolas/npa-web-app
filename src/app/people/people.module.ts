import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';


import { PeopleListComponent } from './people-list.component';


@NgModule({
  declarations: [
    PeopleListComponent,
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  
  bootstrap: [PeopleListComponent]
})
export class PeopleModule { }
