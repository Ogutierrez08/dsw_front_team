import { Component, OnInit } from '@angular/core';
import {FirestoreService} from 'src/app/services/firestore/firestore.service'

@Component({
  selector: 'app-combo-representantes',
  // templateUrl: './combo-representantes.component.html',
  // styleUrls: ['./combo-representantes.component.css']
  template:
  `
  <div style="margin:auto; width: 50%; border: 3px solid green; padding: 10px">
  <label style="color: bisque;">Seleccione un abogado</label>
  <select [(ngModel)]="abogadoSeleccionado">
     <option *ngFor="let abogado of abogados" [value]="abogado.id">
     {{abogado.data.nombres}} {{abogado.data.apellidos}}
     </option>
    </select>
    <br>
    <label style="color: bisque;">abogado seleccionado  {{nombreAbogado}}</label>
</div>
  `
})
export class ComboRepresentantesComponent implements OnInit {

  public abogados = [];
  public abogadoSeleccionado : String;
  public nombreAbogado : String;

  public modificaTexto:string;
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
    this.abogadoSeleccionado = "2is7VcaXPpm9HWic2VRz";
    
    this.nombreAbogado = "nombres";
  }
}
