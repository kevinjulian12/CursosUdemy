import { Persona } from './persona.model';

export class PersonasService{
    personas: Persona[] = [new Persona("kevin","gaitano"),new Persona("Julian","Gaitano")]
};


function AgregarPersona(persona: Persona){
    this.personas.push(persona);
}

