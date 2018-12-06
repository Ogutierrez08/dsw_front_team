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

  public cotizacion = [];

  coti = {
    id:''
  };


  constructor( private firestoreService: FirestoreService,private _Service:SendCotizacionService) { }

  ngOnInit() {
    this.firestoreService.listarCotizacion().subscribe((cotizacionSnapshot)=>{
      this.cotizacion=[];
      cotizacionSnapshot.forEach((cotizacionData:any)=>{
        this.cotizacion.push({
          id:cotizacionData.payload.doc.id,
          data: cotizacionData.payload.doc.data()
        });
      });
    });
  }

  sendCotizacion(event,cotiValor){
    this.asigParametro(cotiValor,()=>{
     this.enviarCorreo(()=>{
       swal('Cotizacion enviada','exitosamente','success')
     })
    })
  }

  asigParametro(cotiza,onSuccess){
    this.coti.id = cotiza.id
    onSuccess()
  }

  enviarCorreo(onSuccess){
    console.log(this.coti)
    this._Service.sendMessage(this.coti).subscribe()
    onSuccess()
  }
}