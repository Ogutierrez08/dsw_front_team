import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "src/app/services/firestore/firestore.service";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public empleados = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getEmpleados().subscribe((empleadosSnapshot)=>{
      this.empleados = [];
      empleadosSnapshot.forEach((empleadoData:any) =>{
        this.empleados.push({
          id: empleadoData.payload.doc.id,
          data: empleadoData.payload.doc.data()
        });
      });
    });
  }

}
