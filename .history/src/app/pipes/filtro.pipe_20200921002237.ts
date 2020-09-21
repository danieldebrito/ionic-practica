import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[],
             texto: string,
             columna: string ): any[] {  // mando la columna como tercer argumento

    if ( texto === '' ) {
      return arreglo;
    }

    texto = texto.toLowerCase(); // lo paso a lowe por ser case sensitive


    return arreglo.filter( item => {  // retorna true / false
      return item[columna].toLowerCase()  // lo pasoa lower por ser case sensitive
              .includes( texto );
    });

  }

}
