import { Component, OnInit } from '@angular/core';
import { TaskResultsService } from '../task-results.service';

@Component({
  selector: 'mt-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private taskResultsService: TaskResultsService) { }

  ngOnInit() {
    this.taskResultsService.flush();
  }

}
