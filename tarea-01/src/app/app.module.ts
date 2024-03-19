import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { NavBarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ContenidoComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
