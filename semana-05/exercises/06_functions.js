console.log ('-- Exercise 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log ('-Exercise 6 a');

var random1 , random2 , resultado;

random1 = Math.round(Math.random()*50);
random2 = Math.round(Math.random()*50);

function suma (a , b) {
    resultado = (a + b);
    return resultado
}
console.log(suma(random1 , random2));

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log ('-Exercise 6 b');

var random3 , random4 , resultado1;

random3 = Math.round(Math.random()*50);
random4 = 'ab';

function suma (a , b) {
    if (typeof a === 'number' && typeof b === 'number') {
        resultado1 = (a + b);
        return resultado1
    }else {
        resultado1 = NaN
        window.alert (resultado1 + ': ' + 'El tipo de dato ingresado no corresponde');
        return resultado1
    }
}
console.log (suma(random3 , random4));

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

console.log ('-Exercise 6 c');

var a = 5;

function validateInteger (a) {
    if (typeof a === 'int'){
    return true
    }else {
        return 'Its not a number'
    }
}
console.log(validateInteger(a));

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya 
decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log ('-Exercise 6 d');

var random5 , random6 , resultado2;

random5 = 4;
random6 = 8.50;

function suma (a , b) {
    if (Number.isInteger(a) && Number.isInteger (b)) {
        resultado2 = (a + b);
        return resultado2;
    }else if (!Number.isInteger(a)) {
        window.alert ('error, el numero a tiene decimales');
        return Math.round(a);
    }else if (!Number.isInteger(b)) {
        window.alert ('error, el numero b tiene decimales');
        return Math.round(b);
    }
}
console.log (suma(random5 , random6));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que
todo siga funcionando igual.*/

console.log ('-Exercise 6 e');

var random7 , random8 , result;

random7 = 5;
random8 = 7.5;
result = random7 + random8;

function suma2 (a , b) {
    if (validate (a , b) == true) {
        result = (a + b);
        return result;
    }else if (!Number.isInteger(a)) {
        window.alert ('error, el numero a tiene decimales');
        return Math.round(a);
    }else if (!Number.isInteger(b)) {
        window.alert ('error, el numero b tiene decimales');
        return Math.round(b);
    }
}
console.log (suma2 (random7 , random8));

function validate (a , b) {
    if (Number.isInteger(a) && Number.isInteger (b)) {
        return true;
    } else {
        return false;
    }
}

