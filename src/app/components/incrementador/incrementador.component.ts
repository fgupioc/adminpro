import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('progreso', {static: false}) progreso: ElementRef;
  @Input() leyenda = 'leyenda';
  @Input() progress = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeProgress(valor: number) {
    if (this.progress >= 100 && valor > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && valor < 0) {
      this.progress = 0;
      return;
    }

    this.progress += valor;
    this.cambioValor.emit(this.progress);
    this.progreso.nativeElement.focus();
  }

  onChange(valor: number) {
    if (valor >= 100) {
      this.progress = 100;
    } else if (valor <= 0) {
      this.progress = 0;
    } else {
      this.progress = valor;
    }

    this.progreso.nativeElement.value = this.progress;
    this.cambioValor.emit(this.progress);
  }
}
