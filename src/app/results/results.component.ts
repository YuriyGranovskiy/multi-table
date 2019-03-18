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
  canShowRapuntsel: boolean;

  constructor(private taskResultsService: TaskResultsService) {    
  }

  ngOnInit() {
    let results = this.taskResultsService.getResults();
    this.correctCount = results.filter(result => result.isCorrect && !result.isLong).length;
    this.correctAndLongCount = results.filter(result => result.isCorrect && result.isLong).length;
    this.incorrectCount = results.filter(result => !result.isCorrect).length;
    this.canShowRapuntsel = this.correctCount > results.length / 2;
  }
}
