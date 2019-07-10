import { Component, OnInit } from '@angular/core';

import { ModalRef } from 'src/app/shared/classes/modal-ref';
import { ModalConfig } from 'src/app/shared/classes/modal-config';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.scss']
})
export class TestContentComponent implements OnInit {

  constructor(
    public config: ModalConfig, 
    public modal: ModalRef
    ) { }

  ngOnInit() {
  }

  onClose() {
    this.modal.close('12345678');
  }
}
