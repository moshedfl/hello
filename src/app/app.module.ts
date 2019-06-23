import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { CollorComponent } from './collor/collor.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    NewComponentComponent,
    CollorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
