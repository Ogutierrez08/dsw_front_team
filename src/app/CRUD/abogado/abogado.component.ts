import { Component, OnInit } from '@angular/core';
import {FirestoreService} from 'src/app/services/firestore/firestore.service'


@Component({
  selector: 'app-abogado',
  templateUrl: './abogado.component.html',
  styleUrls: ['./abogado.component.css']
})
export class AbogadoComponent implements OnInit {
  public abogados = [];
  constructor( private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getAbogados().subscribe((abogadosSnapshot) => {
      this.abogados = [];
      abogadosSnapshot.forEach((abogadoData: any) => {
        this.abogados.push({
          id: abogadoData.payload.doc.id,
          data: abogadoData.payload.doc.data()
        });

      })
    });
  }

}
