import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  taksCount: number = 30;
  constructor() { }

  ngOnInit() {
  }

}
