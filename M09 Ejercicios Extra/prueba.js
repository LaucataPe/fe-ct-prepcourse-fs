function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    //                                9            7 
    // Tu código:
   return arrayOfStrings.sort((a, b) => b.length - a.length)

 }
 
 function buscoInterseccion(array1, array2) {
    // Recibes dos arreglos de números.
    // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
    // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
    // Si no tienen elementos en común, retornar un arreglo vacío.
    // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
    // Tu código:
    var interseccion = []

    for (let i = 0; i < array1.length; i++) {
       if(array2.includes(array1[i])){
        if(!interseccion.includes(array1[i])){
            interseccion.push(array1[i])
        }
       }
    }

    return interseccion
   
 }