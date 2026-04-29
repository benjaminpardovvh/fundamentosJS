console.log(`conexión exitosa con js`)

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "Benjamin";
    alert(`Bienvenido ${nombre}`);
};


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let number1 = 5;
    let number2 = 10;
    alert(`la suma de ${number1} y ${number2} es: ${number1 + number2}`);
};


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let num1 = 15;
    let num2 = 3;
    alert(`la resta de ${num1} y ${num2} es: ${num1 - num2}`);
};


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let numero1 = 2;
    let numero2 = 12;
    alert(`la multiplicacion de ${numero1} y ${numero2} es: ${numero1 * numero2}`);
};


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let nota1 = 6.0;
    let nota2 = 5.5;
    let nota3 = 5.7;
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(`el promedio es: ${promedio}`);
};


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 18;
    if (edad >= 17) { alert(`eres mayor de edad`) }
    else { alert(`eres menor de edad`) };
};


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let resto = 14;
    if (resto % 2 == 0) { alert(`el numero 14 es par`) }
    else { alert(`el numero 14 es impar`) };
};

// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let universidad = 6.5;
    if (universidad == 7.0) { alert(`Estudiante aprobado con puntaje perfecto`) }
    else if (universidad >= 4.0) { alert(`Estudiante aprobado`) }
    else { alert(`Estudiante reprobado`) };
};


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let producto = 2e4;
    let descuento = 2e4 * 0.1;
    alert(`el precio final es: $${producto - descuento}`);
};


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let n1 = 22;
    let n2 = 4;
    if (n1 > n2) {alert(`el numero mayor es: ${n1}`)}
    else {(`el numero mayos es: ${n2}`)};
};