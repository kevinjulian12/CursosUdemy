class Persona{
    private nombre:string;

    constructor(nombre: string){
        this.nombre= nombre;
    }
getNombre():string{
    return this.nombre
}

}

let persona1 = new Persona("Kevin");
console.log(persona1.getNombre())
