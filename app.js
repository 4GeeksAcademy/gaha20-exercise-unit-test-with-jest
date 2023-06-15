// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
};
    console.log(fromEuroToDollar(3.5));
//let valueInDollar = fromEuroToDollar(1)
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
};
console.log(fromDollarToYen(3.5));
//let valueInYen = fromDollarToYen(1)
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.8;
    // retornamos el valor
    return valueInPound;
};
console.log(fromYenToPound(3.5));
const sum = (a,b) => {
    return a + b
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };