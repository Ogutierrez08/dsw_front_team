import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-cotiza-enviadas',
  templateUrl: './cotiza-enviadas.component.html',
  styleUrls: ['./cotiza-enviadas.component.css']
})
export class CotizaEnviadasComponent implements OnInit {

  public cotizacionesEnviadas = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.listarCotizaEnviadas().subscribe((cotizacionSnapshot)=>{
      this.cotizacionesEnviadas=[];
      cotizacionSnapshot.forEach((cotizacionData:any)=>{
        this.cotizacionesEnviadas.push({
          id:cotizacionData.payload.doc.id,
          data: cotizacionData.payload.doc.data()
        });
      });
    });
  }

}
