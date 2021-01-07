interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string;
}

let usuario1:Usuario = {nombreUsuario: "kevin", password: "1234", confirmarPassword:"1234"};
console.log(usuario1)