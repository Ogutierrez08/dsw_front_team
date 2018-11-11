import { Component, OnInit } from '@angular/core';
import { FirestoreUsuarioService } from '../../services/firestore/firestore-usuario.service';
import { UsuarioInterface } from '../../models/usuario';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usu : UsuarioInterface ={
    dni :0,
    nombre:'',
    apellido:'',
    clave:'',
    claveCopia:'',
    correo:''
  }
  //variables que se usara para mostrar modales
  isRegister :boolean;
  
  constructor(private service:FirestoreUsuarioService) { }

  ngOnInit() {
    
  }

}
