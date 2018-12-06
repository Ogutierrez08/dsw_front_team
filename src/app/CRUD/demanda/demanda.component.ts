import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "src/app/services/firestore/firestore.service";
import { DemandaInterface } from 'src/app/models/demanda';
import { NgForm } from "@angular/forms";
import { AbogadosInterface } from 'src/app/models/abogados';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-demanda',
  templateUrl: './demanda.component.html',
  styleUrls: ['./demanda.component.css']
})
export class DemandaComponent implements OnInit {
  response: any
  public Lstdemanda = []
  demanda: DemandaInterface = {
    ruc: '',
    petitorio: '',
    comentario: '',
    domicilio_fiscal:'',
    fecha_inscripcion:'',
    razon_social:'',
    tipo_contribuyente:''
  };

  abogado: AbogadosInterface = {
		apellidos: '',
		comentarios: '',
		email: '',
		especialidad: '',
		facebook: '',
		foto: '',
		google: '',
		nombres: '',
		telefono: '',
		twitter: '',

	};

  public Lstabogado = []

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getDemanda().subscribe((demandaSnapShot)=>{
      this.Lstdemanda = [];
      demandaSnapShot.forEach((demandaData:any)=>{
        this.Lstdemanda.push({
          id: demandaData.payload.doc.id,
          data: demandaData.payload.doc.data()
        });
      });
    });

    this.firestoreService.getAbogados().subscribe((abogadoSnapShot)=>{
      this.Lstabogado = [];
      abogadoSnapShot.forEach((abogadoData:any)=>{
        this.Lstabogado.push({
          id: abogadoData.payload.doc.id,
          data: abogadoData.payload.doc.data()
        });
      });
      console.log(this.Lstabogado)
    });

    
  }

  getDemandaId(event,asigDemanda) {
    this.response = asigDemanda
    console.log(JSON.stringify(this.response))
    if(this.response.data.ruc==""){
      console.log("vacio")
    }else{
      this.demanda.ruc = this.response.data.ruc
      this.demanda.razon_social = this.response.data.razon_social
      this.demanda.petitorio = this.response.data.petitorio
      this.demanda.domicilio_fiscal = this.response.data.domicilio_fiscal
      this.demanda.tipo_contribuyente = this.response.data.tipo_contribuyente
      this.demanda.comentario = this.response.data.comentario
      this.demanda.fecha_inscripcion = this.response.data.fecha_inscripcion
    }
  }

  guardarDemandaAsig(myForm: NgForm){
    console.log(this.demanda)
  }

  getAbogadoId(event,asigAbog){
    this.firestoreService.getAbogado(asigAbog).subscribe(data =>{
      this.abogado = data.payload.data()
    })
  }
}
