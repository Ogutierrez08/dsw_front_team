import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { UsuarioInterface } from '../../models/usuario';
import { map, catchError } from 'rxjs/operators'
import { errorHandler } from '@angular/platform-browser/src/browser';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreUsuarioService {

  constructor(private http:HttpClient) { }

  // Crud Usuario
  
  // las url para hacer las peticiones
  // trae un json
  usUrl: string ="https://integrador-a7bf2.firebaseio.com/usuarios.json";
  // esta url trae la lista de todos los usuarios
  usuariosUrl :string ="https://integrador-a7bf2.firebaseio.com/usuarios/";

  registrarUsuario(usuario: UsuarioInterface){
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.usUrl,body,{headers}).pipe(map( rest =>{
        console.log(rest);
        return rest
    }));
  }
  //el key es el identificado de cada usuario
  actualizarUsuario(usuario: UsuarioInterface,key$:number){
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let url = `${this.usuariosUrl}${key$}.json`;
    return this.http.post(url,body,{headers}).pipe(map( rest =>{
        console.log(rest);
        return rest
    }));

  }
  eliminarUsuario(key$:number){
    let url =  `${this.usuariosUrl}${key$}.json`;
    return this.http.delete(url)
          .pipe(map( rest=>{
          console.log(rest);
      }),
      catchError( e=> throwError(e))
      );

  }
  listarUsuario(){
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(this.usuariosUrl,{headers})
        .pipe(map( rest =>{
            console.log(rest);
            return rest;
        }));

  }
  obtenerUsuario(key$:number){
    let headers=new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url =`${this.usuariosUrl}${key$}.json`;

    return this.http.get(url,{headers}).pipe(map( rest =>{
          console.log(rest);
          return rest;
    }), catchError(err => throwError(err))
    
    );

  }
}
