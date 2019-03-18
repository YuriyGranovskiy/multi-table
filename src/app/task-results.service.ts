import { Injectable } from '@angular/core';
import { TaskResult } from './shared/taskResult';

@Injectable({
  providedIn: 'root'
})
export class TaskResultsService {
  taskResults: TaskResult[] = [];
  testLength: number = 20;
  testFinished: boolean = false;

  constructor() { }

  getResults(): TaskResult[] {
    return this.taskResults;
  }

  flush(): void {
    this.taskResults.length = 0;
    this.testFinished = false;
  }

  add(taskResult: TaskResult){
    if(this.taskResults.length < this.testLength) {
      this.taskResults.push(taskResult);
      if((this.taskResults.length < this.testLength)) {
        this.testFinished = false;
      }
      else {
        this.testFinished = true;
      }
    } else {          
      this.testFinished = true;
    }
  }
}
