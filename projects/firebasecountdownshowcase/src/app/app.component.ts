import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

class User {
  constructor(public id, public time) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent {
  title = 'firebasecountdownshowcase';
  public users: FirebaseListObservable<User[]>;
  constructor(db: AngularFireDatabase) {
      this.users = db.list('/users');
  }

  private UserCounter = 0;

  public AddUser(): void {
    let newUser = new User(this.UserCounter++, '20:20');
    this.users.push(newUser);
  }
}