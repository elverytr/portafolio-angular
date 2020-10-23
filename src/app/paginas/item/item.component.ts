import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { DescripProducto } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

producto: DescripProducto;

  constructor( private route: ActivatedRoute,
               public _servicioProducto: ProductosService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe( parametros => {
      
      this._servicioProducto.getProducto(parametros['id'])
      
      .subscribe( (producto: DescripProducto) => {

        this.producto = producto;
        console.log(producto);

      });
    });

  }

}
