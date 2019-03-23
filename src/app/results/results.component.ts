import { Component, OnInit } from '@angular/core';
import { TaskResultsService } from '../task-results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  correctCount: number;
  correctAndLongCount: number;
  incorrectCount: number;
  canShowGrade1: boolean;
  canShowGrade2: boolean;
  canShowGrade3: boolean;
  canShowGrade4: boolean;
  canShowGrade5: boolean;
  
  constructor(private taskResultsService: TaskResultsService) {    
  }

  ngOnInit() {
    let results = this.taskResultsService.getResults();
    let totalResults = results.length;
    this.correctCount = results.filter(result => result.isCorrect && !result.isLong).length;
    this.correctAndLongCount = results.filter(result => result.isCorrect && result.isLong).length;
    this.incorrectCount = results.filter(result => !result.isCorrect).length;
    if(totalResults === 0)    {
      return;
    }

    if(this.correctCount === results.length) {
      this.canShowGrade1 = true;
    } else if (this.incorrectCount === 0 && this.correctCount > (totalResults / 4 * 3)){
      this.canShowGrade2 = true;
    } else if (this.incorrectCount === 0 && this.correctCount > totalResults / 2) {
      this.canShowGrade3 = true;
    } else if (this.correctCount > totalResults / 2) {
      this.canShowGrade4 = true;
    } else {
      this.canShowGrade5 = true;
    }    
  }
}
