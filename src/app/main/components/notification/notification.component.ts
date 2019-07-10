import { Component, OnInit } from '@angular/core';
import { ModalConfig } from 'src/app/shared/classes/modal-config';
import { ModalRef } from 'src/app/shared/classes/modal-ref';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(
    public config: ModalConfig,
    private modalRef: ModalRef
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modalRef.close();
  }

}
