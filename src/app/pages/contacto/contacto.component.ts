import { Component, OnInit } from '@angular/core';
import { infoPagina } from '../../interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';
import paginaInfoJson from 'src/assets/data/data-pagina.json';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public infoPagina:InfoPaginaService) { }

  paginaInfo: any = paginaInfoJson;

  ngOnInit(): void {
  }

}
