import { Component, OnInit } from '@angular/core';
import { Example } from '../example';
import { ExamplesService } from '../examples.service';
import { ExampleResult } from '../exampleResult';
import { ExampleResultsService } from '../example-results.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  example: Example;
  startTime: number;


  constructor(
    private examplesService: ExamplesService,
    private exampleResultService: ExampleResultsService) { }

  private load(){
    this.example = this.examplesService.getNext();
    this.startTime = performance.now();
  }

  count(result: number) {
    let time = Math.floor(performance.now() - this.startTime);
    
    let exampleResult = new ExampleResult(
      this.example.leftFunctor,
      this.example.rightFunctor,
      result,
      time);
    
    this.exampleResultService.add(exampleResult);
    this.load();
  }

  ngOnInit() {
    this.load();
  }
}
