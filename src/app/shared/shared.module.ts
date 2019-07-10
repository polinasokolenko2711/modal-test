import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalConfig } from './classes/modal-config';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ ModalConfig ],
  entryComponents: [ ModalComponent ],
})
export class SharedModule { }
