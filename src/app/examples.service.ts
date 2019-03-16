import { Injectable } from '@angular/core';
import { Example } from './shared/example';

@Injectable({
  providedIn: 'root'
})
export class ExamplesService {

  constructor() { }

  private getRandomInt(min: number, max: number) {
    return (Math.floor((Math.random() * (max - min + 1)) + min));
  }

  getNext(): Example {
    return new Example(this.getRandomInt(2, 4), this.getRandomInt(2, 9));
  }
}
