import { Component, OnInit } from '@angular/core';
import { TaskResultsService } from '../task-results.service';
import { TaskResult } from '../shared/taskResult';

@Component({
  selector: 'mt-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  taskResults: TaskResult[];
  constructor(private taskResultsService: TaskResultsService) { }

  ngOnInit() {
    this.taskResults = this.taskResultsService.getResults();
  }
}
