import { Component, OnInit } from '@angular/core';
import { SunatService } from 'src/app/services/sunat.service'
import { stringify } from 'querystring';
import { JsonPipe } from '@angular/common';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from "angularfire2/storage";
import { Observable } from "rxjs";
import { DemandaInterface } from "src/app/models/demanda";
import { FirestoreService } from "src/app/services/firestore/firestore.service";
import { NgForm } from "@angular/forms";
import swal from 'sweetalert';


@Component({
  selector: 'app-valida-sunat',
  templateUrl: './valida-sunat.component.html',
  styleUrls: ['./valida-sunat.component.css']
})
export class ValidaSunatComponent implements OnInit {
  response: any
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downLoadUrl: Observable<string>;
  demanda: DemandaInterface = {
    ruc: '',
    petitorio: '',
    comentario: '',
    domicilio_fiscal:'',
    fecha_inscripcion:'',
    razon_social:'',
    tipo_contribuyente:''
  };

  constructor(public sunat: SunatService,private afStorage: AngularFireStorage, private demandaService:FirestoreService) { }

  ngOnInit() {
  }

  sunatValida(ruc) {

    this.sunat.informationValid(ruc).subscribe((data) => {
      this.response = data
      console.log(this.response)
      if (this.response.rucData.length == 0) {
        swal("Validacion de datos", "El ruc no existe o no contiene datos en sunat", 'error')
      } else {
        swal("Validacion de datos", "el ruc existe en sunat", 'success')
        console.log(JSON.stringify(data))
        this.demanda.razon_social = this.response.rucData.razon_social;
        this.demanda.tipo_contribuyente = this.response.rucData.contribuyente_tipo;
        this.demanda.fecha_inscripcion = this.response.rucData.fecha_inscripcion;
        this.demanda.domicilio_fiscal = this.response.rucData.domicilio_fiscal;
        this.demanda.ruc = this.response.rucData.ruc;
      }

    }, err => {
      swal("Validacion de datos", "Ingrese ruc en la caja de texto", 'error')
    })
  }

  guardarDemanda(myForm: NgForm){
    console.log(this.demanda)
    this.demandaService.crearDemanda(this.demanda, () => {
      swal("Demanda", "Registrado","success").then((value) =>{
        location.reload();
      });
    });
  }


}
