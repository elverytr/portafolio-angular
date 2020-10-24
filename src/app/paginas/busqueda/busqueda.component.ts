import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public _servicioProducto: ProductosService ) { }

  ngOnInit(): void {

    this.route.params.subscribe( params => {
      console.log(params['termino']);
      this._servicioProducto.buscarProducto(params['termino']);
    })

  }

}
