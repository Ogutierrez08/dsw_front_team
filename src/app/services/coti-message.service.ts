import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CotiMessageService {

  constructor(private _http:HttpClient) { }

  sendCotiMessage(body){
    //confirmacionSolicitud
    return this._http.post('http://localhost:3000/confirmacionSolicitud',body);
  }
}
