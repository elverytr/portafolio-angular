import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  constructor(private http: HttpClient) { 

    this.cargarProductos();
  }
  private cargarProductos(){
    this.http.get("https://angular-html-917fb.firebaseio.com/productos.json").subscribe( (resp: ProductosService[] )=> {
      
      this.cargando = false;
      console.log(resp);
    });
  }
}
