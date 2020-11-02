import { FormulaGeneratorComponent } from './formula-generator/formula-generator.component';
import { FormulaValidatorComponent } from './formula-validator/formula-validator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Validator', component: FormulaValidatorComponent},
  { path: 'Generator', component: FormulaGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  FormulaValidatorComponent,
  FormulaGeneratorComponent
];
