console.log ( '--EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en 
una 3er variable. */

console.log ('Exercise 1.a');

var numerica1 , numerica2 , numerica3;

var numerica1 = 10;
var numerica2 = 30;
var numerica3 = (numerica1 + numerica2);

console.log (numerica3);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. //

console.log ('Exercise 1.b');

var nombre , apellido , nombreCompleto;

nombre = 'Leonel';
apellido = 'Listro';
nombreCompleto = nombre + ' ' + apellido;

console.log (nombreCompleto);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el 
resultado de la suma en una 3er variable (utilizar length). */

console.log ('Exercise 1.c')

var hermanoMayor , hermanaMenor , sumaTotal;

hermanoMayor = 'Luciano';
hermanaMenor = 'Vanesa';
sumaTotal = hermanoMayor + hermanaMenor;

console.log (sumaTotal.length);
