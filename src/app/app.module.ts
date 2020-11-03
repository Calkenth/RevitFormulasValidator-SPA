import { Materials } from './Materials';
import { EnumToArrayPipe } from './Extensions/enumToArray.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaValidatorComponent } from './formula-validator/formula-validator.component';
import { FormulaGeneratorComponent } from './formula-generator/formula-generator.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SanitizePipe } from './Extensions/SanitizePipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormulaValidatorComponent,
    FormulaGeneratorComponent,
    EnumToArrayPipe,
    SanitizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    Materials
  ],
  providers: [
    EnumToArrayPipe,
    SanitizePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
