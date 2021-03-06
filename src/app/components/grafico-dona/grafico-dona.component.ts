import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() public Labels:string[] = [];
  @Input() public Data:number[] = [];
  @Input() public Type:string = '';

  constructor() { }

  ngOnInit() {
  }

}
