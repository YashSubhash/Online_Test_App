import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-htmlquestion',
  templateUrl: './htmlquestion.component.html',
  styleUrls: ['./htmlquestion.component.css']
})
export class HtmlquestionComponent implements OnInit {

  public name : string="";
  public questionList : any=[];
  public currentQuestion:number=0;
  public points:number=0;
  public correctAnswer=0;
  public incorrectAnswer=0;
  counter=60;  
   interval$: any;
   progress:string="0";
   isQuizCompleted:boolean=false;
  constructor(private questionService :QuestionService){}
 
   ngOnInit(): void {
   this.name=localStorage.getItem("name")!;
   this.gethtmlQuestion()
   this.startCounter()
 
   
   }
 
  
   gethtmlQuestion(){
     this.questionService.gethtmlQuestion()
     .subscribe(res=>{
       this.questionList=res.questions;
     })
 
   }
 nextQuestion(){
   this.currentQuestion++;
 
 }
 previousQuetion(){
   this.currentQuestion--;
 
 }
 answer(currentQno:number,option:any)
 {
   if(currentQno===this.questionList.length){
     this.isQuizCompleted=true;
     this.stopCounter();
   }
   if(option.correct){
     this.points+=10
     this.correctAnswer++;
     setTimeout(()=>{
     this.currentQuestion++;
     this.resetCounter();
     this.getprogressPercent();
     },1000);
   }
   else{
    setTimeout(()=>{
     this.currentQuestion++
     this.incorrectAnswer++;
     this.resetCounter();
     this.getprogressPercent()
    
    },1000);
    //this.points-=10
   }
 }
 startCounter(){
   this.interval$ = interval(1000)
   .subscribe(val=>{
     this.counter--;
     if(this.counter===0){
       this.currentQuestion++;
       this.counter=60;
       this.points-=10;
     }
   });
   setTimeout(()=>{
     this.interval$.unsubscribe();
     
   },600000);
   
 
   }
   stopCounter(){
     this.interval$.unsubscribe();
     this.counter=0;
   }
   resetCounter(){
     this.stopCounter();
     this.counter=60;
     this.startCounter();
 
   }
 getprogressPercent(){
   this.progress=((this.currentQuestion/this.questionList.length)*100).toString()
 
   return this.progress;
 
 }
 
   
 }
