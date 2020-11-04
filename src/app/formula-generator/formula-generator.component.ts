import { Component, OnInit } from '@angular/core';
import { FunctionTypeEnum } from '../Enums/FunctionTypeEnum.enum';

@Component({
  selector: 'app-formula-generator',
  templateUrl: './formula-generator.component.html',
  styleUrls: ['./formula-generator.component.css']
})
export class FormulaGeneratorComponent implements OnInit {
  public functionTypeEnum = FunctionTypeEnum;
  public htmlValue = '';
  public selectedFunction: number;
  public counter = 0;
  public formulaExists = false;
  public numberOfArgs;
  public isEditable = false;

  constructor() { }

  ngOnInit(): void {
    this.selectedFunction = -1;
  }

  submitFormula() {
    console.log('submitting');
  }

  checkArgsNumber(enumValue: number) {
    switch (+enumValue) {
      case this.functionTypeEnum.IfFunction:
        this.numberOfArgs = 3;
        this.isEditable = false;
        break;
      case this.functionTypeEnum.OrFunction:
      case this.functionTypeEnum.AndFunction:
        this.numberOfArgs = 1;
        this.isEditable = true;
        break;
      default:
        this.numberOfArgs = 1;
        this.isEditable = false;
        break;
    }
  }

  addFunction() {
    this.formulaExists = true;
    if (this.selectedFunction !== undefined) {
      switch (+this.selectedFunction) {
        case this.functionTypeEnum.SimpleFunction:
          this.htmlValue += `<input id="fun${this.counter}-${this.functionTypeEnum.SimpleFunction}" type="text">`;
          break;
        case this.functionTypeEnum.IfFunction:
          this.htmlValue += `IF(<input id="fun${this.counter}-${this.functionTypeEnum.IfFunction}_arg0" type="text">`;
          this.htmlValue += `,<input id="fun${this.counter}-${this.functionTypeEnum.IfFunction}_arg1" type="text">`;
          this.htmlValue += `,<input id="fun${this.counter}-${this.functionTypeEnum.IfFunction}_arg2" type="text">)`;
          break;
        case this.functionTypeEnum.NotFunction:
            this.htmlValue += `NOT(<input id="fun${this.counter}-${this.functionTypeEnum.NotFunction}" type="text">)`;
            break;
        case this.functionTypeEnum.AndFunction:
            if (this.numberOfArgs === 1) {
            this.htmlValue += `AND(<input id="fun${this.counter}-${this.functionTypeEnum.AndFunction}_arg0" type="text">)`;
          } else {
            this.htmlValue += `AND(`;
            for (let index = 0; index < this.numberOfArgs; index++) {
              this.htmlValue += `<input id="fun${this.counter}-${this.functionTypeEnum.NotFunction}_arg${index}" type="text">`;
              if (index !== this.numberOfArgs - 1) {
                this.htmlValue += ',';
              }
            }
            this.htmlValue += `)`;
          }
            break;
        case this.functionTypeEnum.OrFunction:
          if (this.numberOfArgs === 1) {
          this.htmlValue += `OR(<input id="fun${this.counter}-${this.functionTypeEnum.OrFunction}_arg0" type="text">)`;
        } else {
          this.htmlValue += `OR(`;
          for (let index = 0; index < this.numberOfArgs; index++) {
            this.htmlValue += `<input id="fun${this.counter}-${this.functionTypeEnum.NotFunction}_arg${index}" type="text">`;
            if (index !== this.numberOfArgs - 1) {
              this.htmlValue += ',';
            }
          }
          this.htmlValue += `)`;
        }
          break;
        case this.functionTypeEnum.RoundDownFunction:
          this.htmlValue += `ROUNDDOWN(<input id="fun${this.counter}-${this.functionTypeEnum.RoundDownFunction}" type="text">)`;
          break;
        case this.functionTypeEnum.RoundFunction:
          this.htmlValue += `ROUND(<input id="fun${this.counter}-${this.functionTypeEnum.RoundFunction}" type="text">)`;
          break;
        case this.functionTypeEnum.RoundUpFunction:
          this.htmlValue += `ROUNDUP(<input id="fun${this.counter}-${this.functionTypeEnum.RoundUpFunction}" type="text">)`;
          break;
      }
      this.counter++;
    }
    this.selectedFunction = -1;
  }
}
