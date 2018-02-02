import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion : Subscription

  constructor() { 

    this.suscripcion = this.regresaObservable()
      .subscribe(
        numero => console.log('subs', numero),
        error => console.error('Error en el obs', error),
        () => console.log('El observador termino')
      );

  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any>{
    return new Observable( observer =>{

      let contador = 0;
      let intervalo = setInterval( ()=>{
        contador += 1;

        let salida = {
          valor: contador
        }
        observer.next(salida);

        // if (contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2){
        //   observer.error('auxilio');
        // }

      },500);
    }).retry(2)
        .map( (resp:any) =>{
          return resp.valor;
        })
        .filter( (valor, index) =>{
          if (valor%2 === 1){
            return true;
          }else{
            return false
          }

        });
  }

  ngOnDestroy(){
    console.log('me destruire');
    this.suscripcion.unsubscribe();
  }

}
