import { Component, OnInit } from '@angular/core';
import { ModalRef } from 'src/app/shared/classes/modal-ref';
import { ModalConfig } from 'src/app/shared/classes/modal-config';
import { ModalService } from 'src/app/shared/services/modal.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  users: [];

  constructor(
    public config: ModalConfig,
    private modalService: ModalService
    ) { }

  ngOnInit() {
    this.setValues();
  }

  private setValues(){
    if (this.config.data){
      console.log(this.config.data);
      this.users = this.config.data;
    }
  }

  onSelect(user){
    this.modalService.open(UserDetailsComponent, {data: user});
  }
}
