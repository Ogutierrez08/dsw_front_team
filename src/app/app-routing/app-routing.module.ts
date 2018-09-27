import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './../about-us/about-us.component';
import { ProjectsComponent } from '../projects/projects.component';
import { GraphicsComponent } from '../graphics/graphics.component';
import { TeamComponent } from '../team/team.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { PanelComponent} from '../panel/panel.component'
import {AbogadoComponent} from '../CRUD/abogado/abogado.component'

const routes: Routes = [
  {
    path:'',
    component: PanelComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'graphics',
    component: GraphicsComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'contact-us',
    component: AbogadoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }