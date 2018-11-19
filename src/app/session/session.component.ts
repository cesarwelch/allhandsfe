import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from '../question';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  question = new Question(0,'','',0);
  questions: Question[] = [];
  param: string = ''; 
  constructor(private route:ActivatedRoute, private SessionService: SessionService){}

  onSubmit() { 
  	console.log("tweqewq")
	this.SessionService.createQuestion(this.question)
  .subscribe(question => {
  	this.questions.push(question);
  	this.question.question = '';
  });
  }

  up(param) {
    this.SessionService.like(param)
    	.subscribe((data: any[]) => {
    		this.questions.find(x => x.id === param.id).likes += 1;
    });
  }

  down(param) {
	this.SessionService.unlike(param)
    	.subscribe((data: any[]) => {
    		this.questions.find(x => x.id === param.id).likes -= 1;
    });
  }
  ngOnInit() {
  	console.log(this)
  	this.route.params.subscribe(value => {
  		this.param = value.id;
  	})
  	this.question = new Question(0,'',this.param,0);
    this.SessionService.getQuestionsBySession(this.param)
    .subscribe((data: any[]) => {
    	for (var i = 0; i < data.length; ++i) {
    		this.questions.push(new Question(data[i].id, data[i].question, data[i].session, data[i].likes))
    	}
    });
  }

}
