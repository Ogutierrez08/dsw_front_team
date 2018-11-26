import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SunatService {

  constructor(private _http:HttpClient) { }

  informationValid(ruc){
    return this._http.post('http://localhost:2193/public/getRucData',ruc)
  }
}
