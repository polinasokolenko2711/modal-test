import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ListOfPopupsComponent } from './main/components/list-of-popups/list-of-popups.component';
import { MainModule } from './main/main.module';

const routes: Routes = [
  {
    path: '',
    component: ListOfPopupsComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    MainModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
