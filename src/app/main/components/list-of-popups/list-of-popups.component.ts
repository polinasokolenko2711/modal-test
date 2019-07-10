import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { NotificationComponent } from '../notification/notification.component';
import { UsersTableComponent } from '../users-table/users-table.component';
import { usersList } from './../../constants/users'

@Component({
  selector: 'app-list-of-popups',
  templateUrl: './list-of-popups.component.html',
  styleUrls: ['./list-of-popups.component.scss']
})
export class ListOfPopupsComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openForm() {
    const ref = this.modalService.open(UserFormComponent);
    ref.afterClosed.subscribe(result => {
      if (result) {
        this.modalService.open(NotificationComponent, {
          data: { message: `Hello ${result}!` }
        });
      }
    });
  }

  openTable() {
    this.modalService.open(UsersTableComponent, { data: usersList });
  }
}
