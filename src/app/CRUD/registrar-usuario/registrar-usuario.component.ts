import { Component, OnInit } from '@angular/core';
import { FirestoreUsuarioService } from '../../services/firestore/firestore-usuario.service';
import { UsuarioInterface } from '../../models/usuario';


import { Router,ActivatedRoute } from '@angular/router';
import { User } from 'firebase';



@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  // usu : UsuarioInterface ={
  //   dniUsuario: '',
  //   nombreUsuario:'',
  //   apeUsuario:'',
  //   passUsuario:'',
  //   passRepeat:'',
  //   emailUsuario:''

  // };
  public usu: UsuarioInterface;
  //variables que se usara para mostrar modales
  isRegister :boolean;

  //todosLosDatos: boolean=false;
  inputPush : boolean;
  constructor(private service:FirestoreUsuarioService, private activatedRoute:ActivatedRoute,private route:Router) { 
      this.usu ={
        dniUsuario: "",
        nombreUsuario:"",
        apeUsuario:"",
        passUsuario:"",
        passRepeat:"",
        emailUsuario:""
      };
      console.log(this.usu);

  }
         
  ngOnInit() {
    
  }
  guardar(form){
    this.service.registrarUsuario(this.usu)
    .subscribe( response => {
      console.log(response);
      
   
    }, error =>{
      console.log(<any>error);
    });
   
  }
  seleccionoInput(){
    this.inputPush=true;
  
  }

}
