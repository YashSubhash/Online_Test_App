import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlquestionComponent } from './htmlquestion/htmlquestion.component';
import { JavaquestionComponent } from './javaquestion/javaquestion.component';
import { JavascriptquestionComponent } from './javascriptquestion/javascriptquestion.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { QuestionComponent } from './question/question.component';
import { TestsectionComponent } from './testsection/testsection.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:"loginpage",pathMatch:"full"},
  {path:"testsection",component:TestsectionComponent},
  {path:"loginpage",component:LoginpageComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"question",component:QuestionComponent},
  {path:"javaquestion",component: JavaquestionComponent},
  {path:"htmlquestion",component: HtmlquestionComponent},
  {path:"javascriptquestion",component:JavascriptquestionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
