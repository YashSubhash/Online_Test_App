import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { JavaquestionComponent } from './javaquestion/javaquestion.component';
import { HtmlquestionComponent } from './htmlquestion/htmlquestion.component';
import { JavascriptquestionComponent } from './javascriptquestion/javascriptquestion.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TestsectionComponent } from './testsection/testsection.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    WelcomeComponent,
    HeaderComponent,
    JavaquestionComponent,
    HtmlquestionComponent,
    JavascriptquestionComponent,
    LoginpageComponent,
    TestsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
