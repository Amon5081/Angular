import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DirectivaCustonDirective } from './directiva-personalizada/directiva-custon.directive';
import { PipeCustomPipe } from './pipe-personalizado/pipe-custom.pipe';


@NgModule({
  declarations: [
    DirectivaCustonDirective, PipeCustomPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

  ],
  exports: [
    SharedRoutingModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    DirectivaCustonDirective,
    PipeCustomPipe,
  ]
})
export class SharedModule { }
