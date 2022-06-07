import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })
    /* const promesa = new Promise( (resolve, reject) => {
      if(false){
        resolve('Hola Mundo!');
      } else {
        reject('Algo salió mal');
      }
      
    });

    promesa.then((mensaje) => {
      console.log(mensaje+' Hey terminé');
    })
    .catch(error => console.log('Error en mi promesa', error));

    console.log('Fin del Init'); */
  }

  getUsuarios() {

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => console.log(body.data));
    });
    
  }

}
