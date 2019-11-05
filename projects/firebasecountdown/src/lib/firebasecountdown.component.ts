import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  template: `
      <p>{{user | json}}</p>
  `
})

export class FirebasecountdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
class User {
  constructor(public id) { }
}

export class AppComponent {
  public user: FirebaseListObservable<User>;
  constructor(db: AngularFireDatabase) {
      this.user = db.list('/user');
  }
}