import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimNgModule } from '../prim-ng/prim-ng.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimNgModule,
  ],
  exports: [
    MenuComponent,
  ],
})
export class SharedModule { }
