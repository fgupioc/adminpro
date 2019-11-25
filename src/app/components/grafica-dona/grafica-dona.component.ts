import {Component, Input, OnInit} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';

export interface Grafico {
  labels: Label[];
  data: MultiDataSet;
  type: ChartType;
  leyenda: string;
}

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {
  @Input() grafico: Grafico;

  constructor() {
  }

  ngOnInit() {
  }

}
