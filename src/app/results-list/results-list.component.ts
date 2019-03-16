import { Component, OnInit } from '@angular/core';
import { ExampleResultsService } from '../example-results.service';
import { ExampleResult } from '../shared/exampleResult';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  exampleResults: ExampleResult[];
  constructor(private exampleResultsService: ExampleResultsService) { }

  ngOnInit() {
    this.exampleResults = this.exampleResultsService.getResults();
  }
}
