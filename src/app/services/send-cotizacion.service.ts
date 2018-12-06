import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SendCotizacionService {

  constructor(private _http:HttpClient) { }

  sendMessage(body){
    //confirmacionSolicitud
    return this._http.post('http://localhost:4000/sendCotizacion',body);
  }
}
