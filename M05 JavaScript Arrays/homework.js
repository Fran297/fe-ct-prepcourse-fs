/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
   // array[ 'hola', 2, 'huisd']
   //claves/key 0  , 1 , 2
   // elemnetos === 3
   // array.length === 3
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length; 
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var arrayIncrementado = [];
   for( i = 0; i < array.length; i++){
      arrayIncrementado.push(array[i]+1)
   }
   //     
   //array [ 5; 16; 514]
   //key (i)  0  1  2
   // arry.lenght === 3
   return arrayIncrementado;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   //var palabras = ('guaso', 'eso', 'yayo', 'etc') ==> ('Guaso eso yayo etc')
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
//   if(array.includes(elemento))
//          {return true;}
//       else {return false;}   
 return array.includes(elemento);

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   // Solucion 1:
   // var suma = 0
   // for ( var i = 0; i < arrayOfNums.length; i++){
   //    suma += arrayOfNums[i];
   // }
   // return suma;
   return arrayOfNums.reduce((acum, next) => acum + next);

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   // Solucion 1:
   // var promedio = 0
   // for(var i = 0; i < resultadosTest.length; i++) {
   //    promedio += resultadosTest[i];
   // }
   // return promedio / resultadosTest.length;

   // resultadosTest = [1, 2, 3, 4, 5]
   // agregarNumeros(resultadosTest) // 15
   // resultadosTest.length // 5
   return agregarNumeros(resultadosTest) / resultadosTest.length;

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   // Solucion 1:
  return Math.max(...arrayOfNums)
   // var max = 0
   // for (let i = 0; i < arrayOfNums.length; i++) {
   //    if(arrayOfNums[i] > max) max= arrayOfNums[i]
   // }
   // return max
}


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multiplicar = 1
   if(arguments.length === 0){
      return 0;
   } else {
      for(var i = 0; i < arguments.length; i++){
         multiplicar = multiplicar * arguments[i]
      }
   }
   return multiplicar;

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   // Solucion 1:
//    var retorno = [];
//    for (let i=0; i< array.length; i++){
//         if (array[i] > 18 ){
//            retorno++;
//         }
//   }
//   return retorno;
   var count = 0
   array.forEach(element => {
      if (element > 18) count++;
   });
   return count;
}


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if( numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   } else {
      return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   // Solucion 1:
   // return num.toString ()[0] === "9";
   var pasarAString = num.toString();
   if (pasarAString[0] == 9){
      return true;
   } else{
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   // Solucion 1:
   // var aux = array[0]
   // for (const elem of array) {
   //   if(elem !== aux) return false
   // }
   //return true
   for(var i = 0; i< array.length -1; i++){
      if( array[i] !== array[i+1]){
         return false;
      }
   }
   return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesPedidos = ["Enero", "Marzo", "Noviembre"];
   const mesesEncontrados = [];
   
   for (let i = 0; i < array.length; i++) {
     if (mesesPedidos.includes(array[i])) {
       mesesEncontrados.push(array[i]);
     }
   }
 
   if (mesesEncontrados.length === 3) {
     return mesesEncontrados;
   } else {
     return "No se encontraron los meses pedidos";
   }
 }
//La función itera sobre el arreglo original y verifica si cada mes se encuentra en el arreglo de meses pedidos usando el método includes().
// Si lo encuentra, lo agrega al arreglo mesesEncontrados. Luego, verifica si se encontraron los tres meses pedidos y, en caso afirmativo, 
//retorna el arreglo mesesEncontrados. En caso contrario, retorna el string "No se encontraron los meses pedidos".

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const resultados = [];
   for (let i = 0; i <= 10; i++) {
     resultados.push(6 *i);
   }
   return resultados;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   // Solucion 1:
   // return array.filter((elemento) => elemento > 100);
   const mayoresACien = [];
   for (let i = 0; i < array.length; i++) {
     if (array[i] > 100) {
       mayoresACien.push(array[i]);
     }
   }
   return mayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let arr = []; 

      let sum = num; 

      for (let i = 0; i < 10; i++) { 

        sum += 2; 

        arr.push(sum); 

        if (sum === i + 1) { 

          return "Se interrumpió la ejecución"; 

          break; 

        } 

      } 

      return arr; 
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const arr = [];

   for (let i = 1; i <= 10; i++) {
     if (i === 5) {
       continue;
     }
 
     num += 2;
     arr.push(num);
   }
 
   return arr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
