import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import paginaInfoJson from 'src/assets/data/data-pagina.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  yearAct: number = new Date().getFullYear();

  constructor(public _infoPaginaServ: InfoPaginaService) { }

  paginaInfo: any = paginaInfoJson;

  ngOnInit(): void {
  }

}
