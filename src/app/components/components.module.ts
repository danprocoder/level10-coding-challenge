import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentsModule { }
