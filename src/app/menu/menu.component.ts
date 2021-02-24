import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  questionData: any;
  questionText: any;
  currentIndex: number = 1;
  totalIndex = 6;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getQuestionData();
  }

  getQuestionData() {
    this.dataService.getData().subscribe(
      (success) => {
        console.log('success', success);
        this.questionData = success.questions;
        this.questionText = success.questions[this.currentIndex].text;
        console.log("questionData", this.questionData);
        console.log("questionText", this.questionText);
      },
      (err) => {
        console.log("err", err);
      }
    )
  }

  nextQuestion(id: any) {
    this.currentIndex = id;
    console.log("currentIndex", this.currentIndex);
    this.questionText = this.questionData[this.currentIndex].text;
    console.log("questionText", this.questionText);
  }

}

