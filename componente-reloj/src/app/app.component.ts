import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componente-reloj';
  
  constructor(){
    setTimeout(() => {
      this.mueveReloj 
    }, 2000);
  }
  mueveReloj(){ 
    let momentoActual = new Date() 
    let hora = momentoActual.getHours() 
    let minuto = momentoActual.getMinutes() 
    let segundo = momentoActual.getSeconds() 
    setTimeout(() => {
      this.mueveReloj 
    }, 1000);
    return hora + " : " + minuto + " : " + segundo;

    //La función se tendrá que llamar así misma para que sea dinámica, 
    //de esta forma:

    
}
  get Fecha ():string{
   let hoy = new Date();
   return  hoy.getDate() + '/' + ( hoy.getMonth() + 1 ) + '/' + hoy.getFullYear();
  }

} 
