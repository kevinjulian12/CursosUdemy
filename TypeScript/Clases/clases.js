"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    return Persona;
}());
var persona1 = new Persona("Kevin");
console.log(persona1.getNombre());
