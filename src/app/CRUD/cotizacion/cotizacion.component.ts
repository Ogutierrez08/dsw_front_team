import { Component, OnInit } from '@angular/core';
import {FirestoreService} from 'src/app/services/firestore/firestore.service'

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  public cotizacion = [];

  constructor( private firestoreService: FirestoreService) { }

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
}