// prompt nos abre un popup con un input para ingresar datos
// let resReturned = prompt('Ingrese un número');

// alert nos abre un popup con un mensaje
// alert('Hola');

/**
 * Patovica.
 *
 * Preguntar la edad al usuario
 *
 * Evaluar las siguientes condiciones:
 *
 * Si es mayor de 18 años y menor de 21 años puede ingresar pero no comprar bebidas alcoholicas
 *
 * Si es mayor de 18 años y mayor de 21 años puede ingresar y comprar bebidas alocholicas
 *
 * Sino no puede ingresar
 *
 * Test y control de calidad
 *
 */

let edad = prompt("Ingrese su edad");

if (!edad) {
  console.log('Debe ingresar una edad valida');
} else {
  if (edad >= 21) {
    console.log("Puede ingresar y comprar bebidas alcoholicas");
  } else if (edad >= 18) {
    console.log("Puede ingresar pero no comprar bebidas alcoholicas");
  }
  else {
    console.log("No puede ingresar");
  }
}

