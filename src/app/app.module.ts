import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ServerComponent } from './server/server.component';
import { StatusLineComponent } from './status-line/status-line.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    ServerComponent,
    StatusLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
