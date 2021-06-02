// Desarrolle un programa que lea 10 números enteros y mostrar la media de los 
// valores positivos y la de los valores negativos.

exports.Validation = function number(arreglo){
    let suma = 0;

    for(let x = 0; x < arreglo.length; x++){
        suma += arreglo[x];
    }
    
    let promedio = suma / arreglo.length;

    return promedio;
}
