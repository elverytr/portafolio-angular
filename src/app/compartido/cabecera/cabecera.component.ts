import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InfoPaginaService } from 'src/app/servicios/info-pagina.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  imports: [  
    RouterModule
    ]

  constructor( public _servicio: InfoPaginaService,
               private router: Router) { }

  ngOnInit(): void {
    }
    
    buscarProducto(termino: string){
        if(termino.length >= 1){
      this.router.navigate(['/buscar',termino]);

      console.log(termino);
      }
  }

}
