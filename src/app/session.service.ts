import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
   constructor(private http: HttpClient) { }
   baseUrl = 'https://allhandsbe.herokuapp.com/api/';
   sessionUrl = this.baseUrl + 'sessions';
   questionUrl = this.baseUrl + 'question';
   getQuestionsUrl = this.baseUrl + 'questions/';
   likeUrl = this.baseUrl + 'like';
   unlikeUrl = this.baseUrl + 'unlike';

   getSessions() {
     return this.http.get(this.sessionUrl);
   }
   getQuestionsBySession(url: string) {
     return this.http.get(this.getQuestionsUrl + url);
   }
   createQuestion(question: Question) {
     return this.http.post<Question>(this.questionUrl, question);
   }
   like(question: Question){
   	 return this.http.put<any>(this.likeUrl, question);
   }
   unlike(question: Question){
   	 return this.http.put<any>(this.unlikeUrl, question);
   }

}
