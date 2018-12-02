import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './../about-us/about-us.component';
import { ProjectsComponent } from '../projects/projects.component';
import { GraphicsComponent } from '../graphics/graphics.component';
import { TeamComponent } from '../team/team.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { PanelComponent} from '../panel/panel.component'
import {AbogadoComponent} from '../CRUD/abogado/abogado.component'
import {RegistrarAbogadoComponent} from '../CRUD/registrar-abogado/registrar-abogado.component'
import {RegistrarUsuarioComponent} from '../CRUD/registrar-usuario/registrar-usuario.component'
import { RegistrarEmpleadoComponent } from "../CRUD/registrar-empleado/registrar-empleado.component";
import { EmpleadoComponent } from '../CRUD/empleado/empleado.component';
import {ValidaSunatComponent} from 'src/app/validaSunat/valida-sunat/valida-sunat.component'

import { DemandaComponent } from '../CRUD/demanda/demanda.component';


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
    component: ContactUsComponent
  },
  {
    path: 'register-rl',
    component: RegistrarAbogadoComponent
  },
  {
    path: 'register-usu',
    component: RegistrarUsuarioComponent
  },
  {
    path: 'register-employee',
    component: RegistrarEmpleadoComponent
  },
  {
    path:'list-employees',
    component:EmpleadoComponent
  },
  {
    path:'valida-ruc',
    component:ValidaSunatComponent

  },
  {
    path:'list-demand',
    component:DemandaComponent
  },

  { path: '**', pathMatch:'full' , redirectTo:'about-us'}
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
