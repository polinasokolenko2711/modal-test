import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ListOfPopupsComponent } from '../main/components/list-of-popups/list-of-popups.component';
import { NotificationComponent } from '../main/components/notification/notification.component';
import { UserFormComponent } from '../main/components/user-form/user-form.component';
import { UsersTableComponent } from '../main/components/users-table/users-table.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    ListOfPopupsComponent,
    NotificationComponent,
    UserFormComponent,
    UsersTableComponent,
    UserDetailsComponent
  ],
  entryComponents: [
    NotificationComponent,
    UserFormComponent,
    UsersTableComponent,
    UserDetailsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule
  ]
})
export class MainModule { }
