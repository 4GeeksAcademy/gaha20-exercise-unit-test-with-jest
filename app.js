// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
};
console.log(fromEuroToDollar(1));

const fromDollarToYen = function(fromEuroToDollar){
    // convertimos el valor a dolares
    let valueInYen = fromEuroToDollar() * 127.9;
    // retornamos el valor
    return valueInYen;
};
console.log(fromDollarToYen(3.5));

const fromYenToPound = function(fromDollarToYen){
    // convertimos el valor a dolares
    let valueInPound = fromDollarToYen * 0.8;
    // retornamos el valor
    return valueInPound;
};
console.log(fromYenToPound);

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
//console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.206, // us dollar
    "GBP": 0.8, // british pound
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
