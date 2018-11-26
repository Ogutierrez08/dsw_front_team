import { Component, OnInit } from '@angular/core';
import {SunatService} from 'src/app/services/sunat.service'
import { stringify } from 'querystring';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-valida-sunat',
  templateUrl: './valida-sunat.component.html',
  styleUrls: ['./valida-sunat.component.css']
})
export class ValidaSunatComponent implements OnInit {
  response:any
  constructor(public sunat:SunatService) { }

  ngOnInit() {
  }

  sunatValida(ruc){
    
    this.sunat.informationValid(ruc).subscribe((data)=>{
      this.response = data
      swal("Validacion de datos","el ruc existe en sunat",'success')
      console.log(JSON.stringify(data))
    },err =>{
      swal("Validacion de datos","el ruc "+ruc+" no existe",'error')
    })
  }
  

}
