import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatFormFieldModule],
  exports: [MatFormFieldModule],
})
export class MaterialModule {}
