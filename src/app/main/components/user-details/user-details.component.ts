import { Component, OnInit } from '@angular/core';
import { ModalRef } from 'src/app/shared/classes/modal-ref';
import { ModalConfig } from 'src/app/shared/classes/modal-config';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user;

  constructor(
    private config: ModalConfig,
    private modalRef: ModalRef
  ) { }

  ngOnInit() {
    this.user=this.config.data;
  }

  onClose() {
    this.modalRef.close();
  }
}
