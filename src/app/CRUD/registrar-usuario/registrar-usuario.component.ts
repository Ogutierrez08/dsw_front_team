import { Component } from '@angular/core';
import { FirestoreUsuarioService } from '../../services/firestore/firestore-usuario.service';
import { UsuarioInterface } from '../../models/usuario';
import { NgForm } from '@angular/forms';


import { Router,ActivatedRoute } from '@angular/router';




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
  usuario : UsuarioInterface;
 // logUser : UsuarioInterface;
  //variables que se usara para mostrar modales

  //para el uso de validaciones
  //forma :FormGroup;

  //todosLosDatos: boolean=false;
  isRegister:boolean;

  constructor(private service:FirestoreUsuarioService, private activatedRoute:ActivatedRoute,private route:Router) { 
    console.log(this.usuario);

    this.usuario = <UsuarioInterface>{

        dniUsuario : "",
        nombreUsuario : "",
        apeUsuario : "",
        emailUsuario : "",
        passUsuario : "" ,
        passRepeat : ""
      }
    // this.logUser = <UsuarioInterface>{
    //   emailUsuario :"",
    //   passUsuario:""
    // }
    

  }


  // noIgual (control : FormControl ): {[s:string]:boolean} {
      // let forma:any = this;
      // if(control.value !== forma.controls['passUsuario'].value){
        // return {
          // noiguales:true
        // }
      // }
      // return null;

  // }
  onSubmit(fap: NgForm) : any {
    if(!fap.valid==true){
      console.log("formulario invalido")
    }
    else{
     this.service.registrarUsuario(this.usuario) 
     .subscribe( data  => {
          //this.usuario = data;
          // console.log(this.usuario);
          // this.usuario = data;
          console.log("registrado");
         // forma.reset();
         
     }, err => console.log(err));
     fap.reset();
    }
  }

  loginUsuario(forma:NgForm):any{
    
    if(!forma.valid==true){
      console.log("formulario login invalido")
      console.log(forma);
    }else{
      this.service.loginUsuario(this.usuario.emailUsuario,this.usuario.passUsuario)
        .subscribe(data =>{
          console.log(data);
          
            this.route.navigate(['/about-us']);
         
            
          
        
        }, err=> console.log(err))
    }
  }
  noIgual( control: NgForm ): { [s:string]:boolean }  {

    // console.log(this);
    let forma:any = this;

    if( control.value !== forma.controls['passUsuario'].value ){
      return {
        noiguales:true
      }
    }

    return null;

  }

 }
   // resetForm():void{
    // this.forma.reset({
      // dniUsuario : "",
      // nombreUsuario : "",
      // apeUsuario : "",
      // emailUsuario : "",
      // passUsuario : "" ,
      // passRepeat : ""
      // });
   // }
 

