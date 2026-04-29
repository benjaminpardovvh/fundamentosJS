console.log(`conexión exitosa con js`)

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nota = 6.8
    let nombre = "Kai"
    if (nota == 7.0) { alert(`el estudiante ${nombre} tiene nota ${nota} y su resultado es: Excelente rendimiento`) }
    else if (nota >= 4.0) { alert(`el estudiante ${nombre} tiene nota ${nota} y su resultado es: rendimiento Decente`) }
    else { alert(`el estudiante${nombre} tiene nota ${nota} y su resultado es: rendimiento Deprimente`) }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre2 = "Josuke Hirashikata"
    alert(`El nombre conbertido es: ${nombre2.toUpperCase()} y tiene ${nombre2.length} caracteres`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "basuka@gmail.com"
    if (correo.length >= 15) { alert(`el correo convertido es ${correo.toLowerCase()} y el resultado es: correo valido`) }
    else { alert(`el correo convertido es ${correo.toLowerCase()} y el resulrado es: correo invalido`) }
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let js = "Estoy aprendiendo JavaScript"
    if (js.length >= 20) { alert(`La frase "${js.toUpperCase()}" tiene ${js.length} caracteres y corresponde a una frase larga`) }
    else if (js.length >= 11) { alert(`La frase "${js.toUpperCase()}" tiene ${js.length} caracteres y corresponde a una frase mediana`) }
    else {alert(`La frase "${js.toUpperCase()}" tiene ${js.length} caracteres y corresponde a una frase corta`)}
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let price = 5e4
    let ganga = price * 0.2
    let ganga2 = price * 0.1
    if (price >= 50000){alert(`El producto ${"teclado".toUpperCase()} tiene un precio final de: $${price - ganga}`)}
else if(price >= 20000) {alert(`El producto ${"teclado".toUpperCase()} tiene un precio final de: $${price - ganga2}`)}
else {alert(`El producto ${"teclado".toUpperCase()} tiene un precio final de: $${price}`)}
}