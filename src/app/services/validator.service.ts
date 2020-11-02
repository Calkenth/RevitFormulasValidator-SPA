import { IResponse } from './../Interfaces/IResponse';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  private validateFormulaUrl = 'https://localhost:5001/api/Formulas/ValidateFormula/';

constructor(private http: HttpClient) { }
  validateFormula(formulaBody: string) {
    console.log(this.validateFormulaUrl + formulaBody);
    return this.http.get<IResponse>(this.validateFormulaUrl + formulaBody)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
