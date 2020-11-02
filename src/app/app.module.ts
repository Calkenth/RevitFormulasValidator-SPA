import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaValidatorComponent } from './formula-validator/formula-validator.component';
import { FormulaGeneratorComponent } from './formula-generator/formula-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaValidatorComponent,
    FormulaGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
