import { Injectable } from '@angular/core';
import { Task } from './shared/task';

@Injectable({
  providedIn: 'root'
})
export class TaskGeneratingService {

  constructor() { }

  private getRandomInt(min: number, max: number) {
    return (Math.floor((Math.random() * (max - min + 1)) + min));
  }

  getNext(): Task {
    return new Task(this.getRandomInt(3, 4), this.getRandomInt(3, 9));
  }
}
