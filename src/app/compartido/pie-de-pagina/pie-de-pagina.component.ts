import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/servicios/info-pagina.service';

@Component({
  selector: 'app-pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.css']
})
export class PieDePaginaComponent implements OnInit {

anio: number = new Date().getFullYear();

  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
