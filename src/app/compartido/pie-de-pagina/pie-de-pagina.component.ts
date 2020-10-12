import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.css']
})
export class PieDePaginaComponent implements OnInit {

anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
