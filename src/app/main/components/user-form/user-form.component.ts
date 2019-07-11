import { Component, OnInit } from '@angular/core';
import { ModalRef } from 'src/app/shared/classes/modal-ref';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  name: string;
  lastname: string;

  constructor(
    public modalRef: ModalRef
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modalRef.close(this.setFullName());
  }

  setFullName() {
    if (this.name && this.lastname) {
      return this.name + ' ' + this.lastname;
    } else {
      return 'User';
    }
  }
}
