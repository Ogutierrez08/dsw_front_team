import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    [ MatButtonModule, MatCheckboxModule ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title: string = 'hmmmm';
}
