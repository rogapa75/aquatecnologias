import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargda = false;

  constructor(private _http:HttpClient) { 
    

    //Leer archivo Json
    this._http.get('assets/data/data-pagina.json')
        .subscribe((resp:infoPagina) => {
            
            this.info = resp;
            this.cargda = true;
        });
    


  }
}
