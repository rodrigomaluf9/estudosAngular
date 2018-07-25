import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos.component';
import { ServicosService } from './servicos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServicosComponent],
  providers : [ServicosService]
})
export class ServicosModule { }
