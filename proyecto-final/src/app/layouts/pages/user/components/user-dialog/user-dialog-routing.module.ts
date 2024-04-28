import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDialogComponent } from './user-dialog.component';

const routes: Routes = [

  {
    path: '',
    component: UserDialogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDialogRoutingModule { }
