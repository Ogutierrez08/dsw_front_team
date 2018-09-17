import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ProjectsComponent,
    GraphicsComponent,
    TeamComponent,
    ContactUsComponent,
    PanelComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    // [ MatButtonModule, MatCheckboxModule ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
