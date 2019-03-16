import { Injectable } from '@angular/core';
import { TaskResult } from './shared/taskResult';

@Injectable({
  providedIn: 'root'
})
export class TaskResultsService {
  taskResults: TaskResult[] = [];

  constructor() { }

  getResults(): TaskResult[] {
    return this.taskResults;
  }

  add(taskResult: TaskResult){
    if(this.taskResults.length < 30) {
      this.taskResults.push(taskResult);
    } else {          
      alert("Тест окончен!");
    }
  }
}
