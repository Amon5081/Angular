import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDialogRoutingModule } from './user-dialog-routing.module';
import { UserDialogComponent } from './user-dialog.component';
import { SharedModule } from '../../../../../shared/shared.module';



@NgModule({
  declarations: [
    UserDialogComponent
  ],
  imports: [
    CommonModule,
    UserDialogRoutingModule,
    SharedModule,
  ],

  exports: [
    UserDialogComponent
  ],

})
export class UserDialogModule { }
