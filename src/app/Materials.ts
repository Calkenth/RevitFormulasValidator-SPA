import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
      MatInputModule,
      MatToolbarModule,
      MatButtonModule,
      MatFormFieldModule
  ]
})
export class Materials {}
