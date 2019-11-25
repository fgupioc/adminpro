import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  progress1 = 20;
  progress2 = 50;

  constructor() {
  }

  ngOnInit() {
  }


}
