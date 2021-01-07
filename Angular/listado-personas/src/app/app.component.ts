import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado personas';
  personas: Persona[] = [] 
 constructor(private personasService: PersonasService){
 }

 ngOnInit():void{
   this.personas=this.personasService.personas;
 }

  onAgregarPersona(persona: Persona){
   // this.personas.push(persona);
   //this.personasService.agregarPersona(persona);
  }
 
}
