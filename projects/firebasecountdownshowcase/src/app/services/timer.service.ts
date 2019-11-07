import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private db: AngularFireDatabase) { }

  findUser() {
    return this.db.list('/users').snapshotChanges()
  }
}
