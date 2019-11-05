import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FirebasecountdownComponent } from './firebasecountdown.component';
import { environment  } from '../env/env';



@NgModule({
  declarations: [FirebasecountdownComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'users'),
    AngularFireDatabaseModule
  ],
  exports: [FirebasecountdownComponent]
})
export class FirebasecountdownModule { }
