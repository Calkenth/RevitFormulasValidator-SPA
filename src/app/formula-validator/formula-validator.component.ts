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
  public revitResponse: IRevitFunction[] = [];
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
    console.log(data);
    if (data.Error !== null) {
      this.errorMsg = data.Error;
      console.log(this.errorMsg);
    } else {
      this.revitResponse = data.Content;
      console.log(this.revitResponse);
    }
  }

}
