import { Component, Input, Output , OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress : ElementRef;

  @Input('nombre') leyenda : string = 'Leyenda';
  @Input('porcentaje') progreso: number = 50;

  @Output('actualizarValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);

  }

  cambiarValor(valor){
    if (this.progreso >= 100){
      return;
    }
    if (this.progreso <= 0) {
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  onChanges(newValue:number){
    // console.log(event);
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    // console.log(elemHTML.value);

    if ( newValue >= 100){
      this.progreso = 100;
    }
    else if ( newValue <= 0){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    //elemHTML.value = Number(this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);

  }

}
