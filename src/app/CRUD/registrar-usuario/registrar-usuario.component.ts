import { Component } from '@angular/core';
import { FirestoreUsuarioService } from '../../services/firestore/firestore-usuario.service';
import { UsuarioInterface } from '../../models/usuario';


import { Router,ActivatedRoute } from '@angular/router';

import { FormGroup,FormControl,Validators,FormArray } from '@angular/forms';



@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent   {

  // usu : UsuarioInterface ={
  //   dniUsuario: '',
  //   nombreUsuario:'',
  //   apeUsuario:'',
  //   passUsuario:'',
  //   passRepeat:'',
  //   emailUsuario:''

  // };
  usuario : UsuarioInterface ={
       dniUsuario : "",
      nombreUsuario : "",
      apeUsuario : "",
      emailUsuario : "",
      passUsuario : "" ,
      passRepeat : ""
  };
  //variables que se usara para mostrar modales

  //para el uso de validaciones
  forma :FormGroup;

  //todosLosDatos: boolean=false;
  isRegister:boolean;

  constructor(private service:FirestoreUsuarioService, private activatedRoute:ActivatedRoute,private route:Router) { 
    console.log(this.usuario);

    this.forma = new FormGroup({
        "dniUsuario" : new FormControl('',[ Validators.required,
                                             Validators.maxLength(8)]),
        "nombreUsuario" : new FormControl('Penecito123',[Validators.required,
                                            Validators.minLength(6)]),
        "apeUsuario" : new FormControl('',[Validators.required,
                                            Validators.minLength(6)]),
        "emailUsuario" : new FormControl('',[Validators.required,
                                             Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
        "passUsuario" : new FormControl('',[Validators.required,
                                                Validators.minLength(6)]), 
        "passRepeat" : new FormControl('',[Validators.required, Validators.minLength(6)])

    })
    // this.usuario = <UsuarioInterface>{

    //   dniUsuario : "",
    //   nombreUsuario : "",
    //   apeUsuario : "",
    //   emailUsuario : "",
    //   passUsuario : "" ,
    //   passRepeat : ""
    // };



  }
  
  onSubmit(){
   
      console.log(this.forma.value)
      console.log(this.forma);
    //  this.service.registrarUsuario(this.usuario) 
    //  .subscribe( data  => {
    //       //this.usuario = data;
    //       console.log(this.usuario);
    //       this.usuario = data;
    //       console.log("registrado");
    
         
    //  }, err => console.log(err));

    //  this.forma.reset({
    //   dniUsuario : "",
    //   nombreUsuario : "",
    //   apeUsuario : "",
    //   emailUsuario : "",
    //   passUsuario : "" ,
    //   passRepeat : ""
    //   });
   }
 
}
