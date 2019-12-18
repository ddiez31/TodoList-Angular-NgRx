// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReversePipe
  ],
  exports: [
    ReversePipe
  ],
  providers: []
})
export class ReversePipeModule { }
