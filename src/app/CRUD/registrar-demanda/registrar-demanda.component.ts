import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from "angularfire2/storage";
import { Observable } from "rxjs";
import { DemandaInterface } from "src/app/models/demanda";
import { FirestoreService } from "src/app/services/firestore/firestore.service";
import { NgForm } from "@angular/forms";
import swal from 'sweetalert';

@Component({
  selector: 'app-registrar-demanda',
  templateUrl: './registrar-demanda.component.html',
  styleUrls: ['./registrar-demanda.component.css']
})
export class RegistrarDemandaComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downLoadUrl: Observable<string>;
  demanda: DemandaInterface = {
    ruc: '',
    petitorio: '',
    comentario: ''
  };


  constructor(private afStorage: AngularFireStorage, private demandaService:FirestoreService) { }

  guardarDemanda(myForm: NgForm){
    this.demandaService.crearDemanda(this.demanda, () => {
      swal("Demanda", "Registrado","success").then((value) =>{
        location.reload();
      });
    });
  }

  ngOnInit() {
  }

}
