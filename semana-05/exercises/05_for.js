// console.log ('-- Exercise 5: FOR');

// /* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar 
// una alerta utilizando cada una de las palabras.*/

// console.log ('-Exercise 5 a');

// var palabras;

// palabras = ['ave', 'boca', 'casa', 'dedo', 'efe'];

// for (let i = 0; i < palabras.length; i++) {
//     window.alert (palabras[i]);
// }

// /* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
// modificada.*/

// console.log ('-Exercise 5 b');

// var palabras1 , elemento , primeraLetras , restoLetra;

// palabras1 = ['ave', 'boca', 'casa', 'dedo', 'efe'];

// for (let i = 0; i < palabras1.length; i++){
//     elemento = palabras1 [i];
//     primeraLetras = elemento.substring (0 , 1);
//     restoPalabra = elemento.substring (1);
//     window.alert (primeraLetras.toUpperCase() + restoPalabra);
// }

// /* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un 
// bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena
// completa.*/

// console.log('-Exercise 5 c');

// var sentence , palabras2;

// sentence = ' ';
// palabras2 = ['ave', 'boca', 'casa', 'dedo', 'efe'];

// for (let i = 0; i < palabras2.length;){
//     sentence = palabras2 [i];
//     i++
//     sentence = palabras2.toString();
// }
// window.alert (sentence);

// /* d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir
// que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9.
// Mostrar por la consola del navegador el array final (utilizar console.log).*/

// console.log ('-Exercise 5 d');

// var vacio;

// vacio = '';

// for (let i= 0; i <= 9 ; i++) {
//     vacio = i;
//     console.log (vacio);
// }