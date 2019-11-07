import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.styl']
})
export class TimersComponent implements OnInit {
  users: AngularFireList<any[]> = [];
  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.timerService.findUser().subscribe(users => {this.users = users})
  }
}
