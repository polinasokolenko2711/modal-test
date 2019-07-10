import { Component, OnInit } from '@angular/core';
import { ModalRef } from 'src/app/shared/classes/modal-ref';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userName: string;

  constructor(
    public modalRef: ModalRef
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modalRef.close(this.userName);
  }
}
