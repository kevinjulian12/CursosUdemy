import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent implements OnInit {
@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput:string;
  apellidoInput:string;

  constructor(private loggingsService:LoggingService) { }

  ngOnInit(): void {
  }
  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput)
this.loggingsService.enviarMensajeAConsola("Enviamos persona"+persona1.nombre)
    this.personaCreada.emit(persona1);
  }

}
