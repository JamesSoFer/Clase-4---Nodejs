// Transformar en código el pseudocódigo que se muestra a continuación, 
// correspondiente al cálculo del volumen de un cilindro dados su altura y diámetro.

exports.Validation = function number(altura,diametro){
    let pi = 3.141593;

    let resultado = pi * Math.pow(diametro/ 2,2) * altura;

    return resultado;
}
