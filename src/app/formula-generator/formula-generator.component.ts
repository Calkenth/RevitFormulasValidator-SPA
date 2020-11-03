import { Component, OnInit } from '@angular/core';
import { FunctionTypeEnum } from '../Enums/FunctionTypeEnum.enum';

@Component({
  selector: 'app-formula-generator',
  templateUrl: './formula-generator.component.html',
  styleUrls: ['./formula-generator.component.css']
})
export class FormulaGeneratorComponent implements OnInit {
  public functionTypeEnum = FunctionTypeEnum;

  constructor() { }

  ngOnInit(): void {
  }

  changed(e: any) {
  }
}
