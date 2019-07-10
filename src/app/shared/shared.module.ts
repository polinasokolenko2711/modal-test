import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalComponent } from './components/modal/modal.component';
import { ModalConfig } from './classes/modal-config';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ ModalConfig ],
  entryComponents: [ ModalComponent ],
})
export class SharedModule { }
