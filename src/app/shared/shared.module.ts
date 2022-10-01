import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const modules = [MatCardModule, MatInputModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class SharedModule {}
