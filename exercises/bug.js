const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i=0; i < numeros.length; i++) { // Debe ser i < numeros.length, no <= ya que se saldría de rango del array
        sumaTotal += numeros[i]
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);