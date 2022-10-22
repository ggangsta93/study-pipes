import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';



@NgModule({
  declarations: [NumbersComponent, NotCommonsComponent, BasicsComponent, SortComponent],
  exports: [NumbersComponent, NotCommonsComponent, BasicsComponent, SortComponent],
  imports: [
    CommonModule
  ]
})
export class SalesModule { }
