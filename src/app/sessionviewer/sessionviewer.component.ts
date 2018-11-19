import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-sessionviewer',
  templateUrl: './sessionviewer.component.html',
  styleUrls: ['./sessionviewer.component.css']
})
export class SessionviewerComponent implements OnInit {
 

  headElements = ['#', 'Session'];

  sessions: any = [];

  constructor(private SessionService: SessionService) { }
  date: Date = new Date();
  url: string = '';
  ngOnInit() {
  	this.SessionService.getSessions()
    .subscribe((data: SessionviewerComponent) => this.sessions = data);
    let month: number = this.date.getMonth()+1;
    this.url = this.date.getFullYear() + '' + month + '' + this.date.getDate() + '' + this.date.getHours() + '' + this.date.getMinutes() + '' + this.date.getMilliseconds();
  }

}
