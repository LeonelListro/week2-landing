console.log ('-- Exercise 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase). */

console.log ('-Exercise 2.a');

var paragraph;

paragraph = 'variablecon13';

console.log (paragraph.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log ('-Exercise 2.b');

var paragraph2;

paragraph2 = 'variablecon13';

console.log (paragraph2.substring(0 , 5));

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log ('-Exercise 2.c');

var paragraph3;

paragraph3 = 'variablecon13';

console.log (paragraph3.substring(10 , 13));

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log ('-Exercise 2.d');

var paragraph4 , primerLetra , primerMayus , restoLetras , restoMinus , paragraphDone;

paragraph4 = 'variablecon13';
primerLetra = paragraph4.substring (0 , 1);
primerMayus = primerLetra.toUpperCase();
restoLetras = paragraph4.substring (1 , 13);
restoMinus = restoLetras.toLowerCase();
paragraphDone = primerMayus + restoMinus;

console.log (paragraphDone);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log ('-Exercise 2.e');

var paragraph5 , espacio;

paragraph5 = 'ejercicio e';
espacio = paragraph5.indexOf(' ');

console.log (espacio);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula 
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log ('-Exercise 2.f');

var paragraph5 , posLetra1 , primeraLetra1 , primeraMayus1 , posLetra2 , primeraLetra2 , primerMayus2 , restoDeLetras1 , restoDeLetras2;
var fraseDone;

paragraph5 = 'extremadamente complicado';
posLetra1 = paragraph5.indexOf('e');
primeraLetra1 = paragraph5.substring (0 , 1);
primeraMayus1 = primeraLetra1.toUpperCase();
posLetra2 = paragraph5.indexOf('c');
primeraLetra2 = paragraph5.substring (15 , 16);
primerMayus2 = primeraLetra2.toUpperCase();
restoDeLetras1 = paragraph5.substring (1 , 15);
restoDeLetras2 = paragraph5.substring (16 , 25);
fraseDone = primeraMayus1 + restoDeLetras1 + primerMayus2 + restoDeLetras2;

console.log (fraseDone);
