import { Component, OnInit } from '@angular/core';
import {FirestoreService} from 'src/app/services/firestore/firestore.service'
import {SendCotizacionService} from 'src/app/services/send-cotizacion.service'
import swal from 'sweetalert'
import { Cotizacion } from 'src/app/models/cotizacion';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  public cotizaciones = [];

  coti = {
    id:''
  };

  cotizacionEnv : Cotizacion = {
    ruc: '',
    petitorio: '',
    comentario: '',
    domicilio_fiscal:'',
    fecha_inscripcion:'',
    razon_social:'',
    tipo_contribuyente:'',
    apellidos: '',
    nombres: ''
 
  }

  cotizacion: Cotizacion = {
    ruc: '',
    petitorio: '',
    comentario: '',
    domicilio_fiscal:'',
    fecha_inscripcion:'',
    razon_social:'',
    tipo_contribuyente:'',
    apellidos: '',
    nombres: ''
  };


  constructor( private firestoreService: FirestoreService,private _Service:SendCotizacionService) { }

  ngOnInit() {
    this.firestoreService.listarCotizacion().subscribe((cotizacionSnapshot)=>{
      this.cotizaciones=[];
      cotizacionSnapshot.forEach((cotizacionData:any)=>{
        this.cotizaciones.push({
          id:cotizacionData.payload.doc.id,
          data: cotizacionData.payload.doc.data()
        });
      });
    });
  }

  sendCotizacion(event,cotiValor){
    console.log(cotiValor)
    this.asigParametro(cotiValor,()=>{
     this.enviarCorreo(()=>{
       swal('Cotizacion enviada','exitosamente','success').then(()=>{
        this.guardarCotizacionEnv(()=>{
            this.borrarCotizacion()
        })     
       })
     })
    })
  }

  asigParametro(cotiza,onSuccess){
    this.coti.id = cotiza.id
    this.cotizacionEnv.nombres = cotiza.data.nombres
    this.cotizacionEnv.apellidos = cotiza.data.apellidos
    this.cotizacionEnv.domicilio_fiscal = cotiza.data.domicilio_fiscal
    this.cotizacionEnv.petitorio = cotiza.data.petitorio
    this.cotizacionEnv.razon_social = cotiza.data.razon_social
    this.cotizacionEnv.ruc = cotiza.data.ruc
    this.cotizacionEnv.fecha_inscripcion = cotiza.data.ruc
    this.cotizacionEnv.petitorio = cotiza.data.petitorio
    this.cotizacionEnv.tipo_contribuyente = cotiza.data.tipo_contribuyente
    this.cotizacionEnv.comentario = cotiza.data.comentario
    onSuccess()
  }

  enviarCorreo(onSuccess){
    console.log(this.coti)
    this._Service.sendMessage(this.coti).subscribe()
    onSuccess()
  }

  guardarCotizacionEnv(onSuccess){
    console.log(this.cotizacionEnv)
    this.firestoreService.crearCotizacionEnv(this.cotizacionEnv,()=>{
      onSuccess()
    })
  }

  borrarCotizacion(){
    this.firestoreService.deleteCotizacion(this.coti.id,()=>{

    })
  }
}