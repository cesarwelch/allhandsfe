import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session/session.component';
import { SessionviewerComponent } from './sessionviewer/sessionviewer.component';
import { QuestionsComponent } from './Questions/questions.component';


const routes: Routes = [{
	path: 'session/:id', component: SessionComponent
},{ path: '', component: SessionviewerComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
