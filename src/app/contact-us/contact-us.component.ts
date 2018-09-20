import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';
import swal from 'sweetalert'


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public _MessageService: MessageService) { }

  ngOnInit() {
  }
  contactForm(form) {
    this._MessageService.sendMesssage(form).subscribe(() => {
      try {
        swal("Formulario de contacto","Enviado mensaje correctamente",'success')
      } catch (error) {
        swal("Formulario de contacto","Mensaje no enviado",'error')
      }
     
    });
    }

}
