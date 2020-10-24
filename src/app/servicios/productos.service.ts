import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient) { 

    this.cargarProductos();
  }
  private cargarProductos(){

    return new Promise( (resolve,reject) => {
      
      this.http.get("https://angular-html-917fb.firebaseio.com/productos_idx.json").subscribe( (resp: Producto[] )=> {
      this.productos = resp;
      this.cargando = false;
      resolve();

    });

    });

    
  }
  getProducto( id: string){
    return this.http.get(`https://angular-html-917fb.firebaseio.com/productos/${ id }.json`);
  }
  buscarProducto(termino: string){
    //cargar productos
    if(this.productos.length === 0){
        this.cargarProductos().then( ()=>{
          //ejecutar despues de tener los productos
          //ejecutar filtro 
          this.filtrarProductos( termino );        
        });
    }else{
      //aplicar filtro
      this.filtrarProductos( termino ); 
    }

  }
    private filtrarProductos( termino: string ){
      
      //console.log(this.productos);

      this.productoFiltrado = [];

      termino = termino.toLocaleLowerCase();

      this.productos.forEach(  prod =>{

        const categoriaLower = prod.categoria.toLocaleLowerCase();
        const tituloLower = prod.titulo.toLocaleLowerCase();

        if( categoriaLower.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0){
          this.productoFiltrado.push( prod );
        }

      });

    };
}
