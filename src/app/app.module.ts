import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SkyBackgroundComponent } from './sky-background/sky-background.component';

@NgModule({
  declarations: [
    AppComponent,
    SkyBackgroundComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
