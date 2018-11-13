import { Component, OnInit } from '@angular/core';
import { FirestoreUsuarioService } from '../../services/firestore/firestore-usuario.service';
import { UsuarioInterface } from '../../models/usuario';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usu : UsuarioInterface ={
    
    nombre:'',
    apellido:'',
    clave:'',
    claveCopia:'',
    correo:''
  }
  //variables que se usara para mostrar modales
  isRegister :boolean;

  //todosLosDatos: boolean=false;
  inputPush : boolean;
  constructor(private service:FirestoreUsuarioService, private activatedRoute:ActivatedRoute,private route:Router) { 
    this.inputPush=false;
 

  }
         
  ngOnInit() {
    
  }
  guardar(){
   
    this.service.registrarUsuario(this.usu)
        .subscribe((data:any)=>{
        
          this.usu=data;
          console.log(data);
         
        }, error =>{
          console.log(error);
        })
  }
  seleccionoInput(){
    this.inputPush=true;
  
  }

}
