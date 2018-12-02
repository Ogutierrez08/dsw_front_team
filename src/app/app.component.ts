import { Component } from '@angular/core';
import { FirestoreUsuarioService } from './services/firestore/firestore-usuario.service';
import { UsuarioInterface } from './models/usuario';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 // title = 'GestionDemandas';
  usuario : UsuarioInterface;
  constructor(private service:FirestoreUsuarioService, private ruta :Router){
    
  }
  logout(){
        this.ruta.navigate(['/about-us']);
  }


}
