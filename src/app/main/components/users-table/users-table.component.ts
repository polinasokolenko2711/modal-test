import { Component, OnInit } from '@angular/core';
import { ModalConfig } from 'src/app/shared/classes/modal-config';
import { ModalService } from 'src/app/shared/services/modal.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { ModalRef } from 'src/app/shared/classes/modal-ref';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  users: [];

  constructor(
    private modalRef: ModalRef,
    public config: ModalConfig,
    private modalService: ModalService,
    ) { }

  ngOnInit() {
    this.setValues();
  }

  private setValues(){
    if (this.config.data){
      this.users = this.config.data;
    }
  }

  onSelect(user){
    this.modalService.open(UserDetailsComponent, { data: user });
  }
  
  onClose() {
    this.modalRef.close();
  }
}
