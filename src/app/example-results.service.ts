import { Injectable } from '@angular/core';
import { ExampleResult } from './shared/exampleResult';

@Injectable({
  providedIn: 'root'
})
export class ExampleResultsService {
  exampreResults: ExampleResult[] = [];

  constructor() { }

  getResults(): ExampleResult[] {
    return this.exampreResults;
  }

  add(exampleResult: ExampleResult){
    this.exampreResults.push(exampleResult);
  }
}
