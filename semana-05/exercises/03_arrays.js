console.log ('-- Exercise 3: ARRAYS');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log ('-Exercise 3.a');

var meses 

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

console.log (meses [4] , meses [10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log ('-Exercise 3.b');

var meses , mesesOrdenados;

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
mesesOrdenados = meses.sort();

console.log (mesesOrdenados);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log ('-Exercise 3.c');

var meses , mesInicio , mesFinal;

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
mesInicio = meses.unshift ('mes inicio');
mesFinal = meses.push ('mes final');

console.log (meses)

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log ('-Exercise 3.d');

var meses , mesInicionot , mesfinalnot;

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
mesInicionot = meses.shift();
mesfinalnot = meses.pop();

console.log (meses);

/* e. Invertir el orden del array (utilizar reverse).*/

console.log ('-Exercise 3.e');

var meses , mesesInvertidos;

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
mesesInvertidos = meses.reverse()

console.log (mesesInvertidos)

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

console.log ('-Exercise 3.f');

var meses , mesesUnidos;

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
mesesUnidos = meses.join('-');

console.log (mesesUnidos);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

console.log ('-Exercise 3.f');

var meses , mesesCut;

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
mesesCut = meses.slice(4 , 11);

console.log (mesesCut);