function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido por parámetro.
    // Tu código:
    return array[0]
 }
 
 function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código:
    const ultimoElemento = array.length - 1
    return array[ultimoElemento]
 }
 
 function obtenerLargoDelArray(array) {
    // Retornar la longitud del arreglo recibido por parámetro.
    // Tu código:
    return array.length
 }
 
 function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    const arrayIncrementos = []
    for (let i = 0; i < array.length; i++) {
        arrayIncrementos.push(array[i] + 1)
    }
    return arrayIncrementos
 }
 
 function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
   array.push(elemento)
   return array
 }
 
 function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.unshift(elemento)
    return array
 }
 
 function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
    let frase = '';
    for (let i = 0; i < palabras.length; i++) {
       if(frase === ''){
        frase = palabras[i]
       }else{
        frase = frase + ' ' + palabras[i]
       }
    }
    return frase
 }

 function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
    return palabras.join('')
 }

 switch (num) {
   case 10:
      
      break;
 
   default:
      break;
 }