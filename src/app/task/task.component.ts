import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskGeneratingService } from '../task-generating.service';
import { TaskResult } from '../shared/taskResult';
import { TaskResultsService } from '../task-results.service';

@Component({
  selector: 'mt-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: Task;
  startTime: number;
  
  constructor(
    private taskGeneratingService: TaskGeneratingService,
    private taskResultService: TaskResultsService) { }

  private load(){
    this.task = this.taskGeneratingService.getNext();
    this.startTime = performance.now();
  }

  count(result: number) {
    let time = Math.floor(performance.now() - this.startTime);
    
    let taskResult = new TaskResult(
      this.task.leftFunctor,
      this.task.rightFunctor,
      result,
      time);
    
    this.taskResultService.add(taskResult);
    this.load();
  }

  ngOnInit() {
    this.load();
  }
}
