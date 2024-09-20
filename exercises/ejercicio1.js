const usuario = {
    nombre: "Alejandro",
    apellidos: "Hervás González",
    temasBootcamp: [
        {
            nombre: "Node.js",
            fecha: "2024-10-21"
        },
        {
            nombre: "Git",
            fecha: "2024-09-18"
        },
        {
            nombre: "React",
            fecha: "2024-12-16"
        }
    ],
    busquedaEmpleo: true
}

console.log(usuario.temasBootcamp[2].fecha)