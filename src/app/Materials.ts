import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
      MatInputModule,
      MatToolbarModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatGridListModule
  ]
})
export class Materials {}
