import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {AbogadosInterface} from 'src/app/models/abogados'
import { EmpleadosInterface } from 'src/app/models/empleados';
import { DemandaInterface } from 'src/app/models/demanda';
import { Cotizacion } from 'src/app/models/cotizacion';
import { CotizacionesEnviadas } from "src/app/models/cotizacionEnviada";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  abogadosColecction: AngularFirestoreCollection<AbogadosInterface>

  empleadoColecction: AngularFirestoreCollection<EmpleadosInterface>

  demandaColecction: AngularFirestoreCollection<DemandaInterface>

  cotizacionColecction: AngularFirestoreCollection<Cotizacion>

  cotizacionEnvColecction: AngularFirestoreCollection<Cotizacion>

  

  constructor(private firestore: AngularFirestore) { 
  this.abogadosColecction = firestore.collection<AbogadosInterface>('abogados');
  this.empleadoColecction = firestore.collection<EmpleadosInterface>('empleados');
  this.demandaColecction = firestore.collection<DemandaInterface>('demanda')
  this.cotizacionColecction = firestore.collection<Cotizacion>('cotizacion')
  this.cotizacionEnvColecction = firestore.collection<Cotizacion>('cotizacionEnv')
  }

  public createAbogado(abogado:AbogadosInterface, onSuccess:Function){
    this.abogadosColecction.add(abogado)
      .then((value) => {
        console.log('value', value)

        onSuccess()
      })
  }

  public getAbogado(documentId: string) {
    return this.firestore.collection('abogados').doc(documentId).snapshotChanges();
  }

  public getAbogados() {
    return this.firestore.collection('abogados').snapshotChanges();
  }
  
  public updateAbogado(documentId: string, data: any) {
    return this.firestore.collection('abogados').doc(documentId).set(data);
          }

  /**
   * Empleado - CRUD
   */
  public crearEmpleado(empleado:EmpleadosInterface, onSuccess:Function) {
    this.empleadoColecction.add(empleado).then((value) =>{
      console.log('value', value);
      onSuccess();
    })
  }

  public getEmpleados(){
    return this.firestore.collection('empleados').snapshotChanges();
  }

  /**
   * Demanda - CRUD
   */
  public crearDemanda(demanda:DemandaInterface, onSuccess:Function){
    this.demandaColecction.add(demanda).then((value)=>{
      console.log('value',value);
      onSuccess();
    });
  }

  public getDemanda(){
    return this.firestore.collection('demanda').snapshotChanges();
  }

  public deleteDemanda(documentId: string,onSuccess){
    this.demandaColecction.doc(documentId).delete().then(()=>{
      onSuccess()
    })
  }
  
  /*
    * Cotizacion - CRUD
  */
  public crearCotizacion(cotizacion:Cotizacion, onSuccess:Function){
    this.cotizacionColecction.add(cotizacion).then((value)=>{
      console.log('value',value);
      onSuccess();
    });
  }
  
  public listarCotizacion(){
    return this.firestore.collection('cotizacion').snapshotChanges();
  }

  public crearCotizacionEnv(cotizacion:Cotizacion,onSuccess){
    this.cotizacionEnvColecction.add(cotizacion).then(()=>{
      onSuccess()
    })
  }
  public deleteCotizacion(documentId: string,onSuccess){
    this.cotizacionColecction.doc(documentId).delete().then(()=>{
      onSuccess()
    })
  }

  public listarCotizaEnviadas(){
    return this.firestore.collection('cotizacionEnv').snapshotChanges();
  }
}

  