import { IRevitFunction } from './../Interfaces/IRevitFunction';
import { IResponse } from './../Interfaces/IResponse';
import { ValidatorService } from './../services/validator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula-validator',
  templateUrl: './formula-validator.component.html',
  styleUrls: ['./formula-validator.component.css']
})
export class FormulaValidatorComponent implements OnInit {
  public revitFunctions: IRevitFunction[] = [];
  public errorMsg: string;

  constructor(private validatorService: ValidatorService) { }

  ngOnInit(): void {
  }

  validate(formula: string) {
    this.validatorService.validateFormula(formula)
    .subscribe(data => this.assignResponse(data),
      error => this.errorMsg = error);
  }

  assignResponse(data: IResponse) {
    if (data.success) {
      this.revitFunctions = JSON.parse(data.content);
    } else {
      this.errorMsg = data.error;
    }
  }

}
