console.log(`conexión exitosa con js`)

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nota = 6.8;
    let nombre = "Kai";
    if (nota == 7.0) { alert(`el estudiante ${nombre} tiene nota ${nota} y su resultado es: Excelente rendimiento`) }
    else if (nota >= 4.0) { alert(`el estudiante ${nombre} tiene nota ${nota} y su resultado es: rendimiento Decente`) }
    else { alert(`el estudiante ${nombre} tiene nota ${nota} y su resultado es: rendimiento Deprimente`) };
};


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre2 = "Josuke Higashikata";
    alert(`El nombre convertido es: ${nombre2.toUpperCase()} y tiene ${nombre2.length} caracteres`);
};


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "basuka@gmail.com";
    if (correo.length >= 15) { alert(`el correo convertido es ${correo.toLowerCase()} y el resultado es: correo valido`) }
    else { alert(`el correo convertido es ${correo.toLowerCase()} y el resulrado es: correo invalido`) };
};


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let js = "Estoy aprendiendo JavaScript";
    if (js.length >= 20) { alert(`La frase "${js.toUpperCase()}" tiene ${js.length} caracteres y corresponde a una frase larga`) }
    else if (js.length >= 11) { alert(`La frase "${js.toUpperCase()}" tiene ${js.length} caracteres y corresponde a una frase mediana`) }
    else { alert(`La frase "${js.toUpperCase()}" tiene ${js.length} caracteres y corresponde a una frase corta`) };
};


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let price = 50000;
    let ganga = price * 0.20;
    let ganga2 = price * 0.10;
    if (price >= 50000) { alert(`El producto ${"teclado".toUpperCase()} tiene un precio final de: $${price - ganga}`) }
    else if (price >= 20000) { alert(`El producto ${"teclado".toUpperCase()} tiene un precio final de: $${price - ganga2}`) }
    else { alert(`El producto ${"teclado".toUpperCase()} tiene un precio final de: $${price}`) };
};

//Ejercicio 16: Boleta de compra con clasificación de cliente
//Convertir el nombre del cliente a mayúsculas
//*Determinar el tipo de cliente según el precio:
//*Mayor o igual a 100.000 → Cliente Premium (20% descuento)
//*Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
//*Menor a 50.000 → Cliente Normal (sin descuento)


function ejercicio16() {
    let precio = 1000000;
    let discount = precio * 0.20;
    let discount2 = precio * 0.10;
    if (precio >= 100000) { alert(`El producto ${"teclado".toUpperCase()} tiene un precio de: $${precio} pero con descuento, el final seria dede, aplicando el descuendo de cliente PREMIUM: $${precio - discount}`) }
    else if (precio >= 50000) { alert(`El producto ${"teclado".toUpperCase()} tiene un precio de: $${precio} pero con descuento, el precio final seria de, aplicando el descuento de cliente frecuete: $${precio - discount2}`) }
    else { alert(`El producto ${"teclado".toUpperCase()} tiene un precio de: $${precio}`) };
};

//Ejercicio 17: Análisis de frase con puntuación
//*Convertir la frase a minúsculas
//*Contar la cantidad de caracteres
//*Clasificar el puntaje:
//*90 o más → Excelente
//*70 o más → Bueno
//*Menor a 70 → Insuficiente
function ejercicio17() {
    let frase = "Las llamadas en Discord son lo mas terapeutico que he tenido en lo que llevo de año.";
    if (frase.length >= 90) { alert(`La frase "${frase.toLowerCase()}" tiene ${frase.length} caracteres y su puntuacion es: Excelente`) }
    else if (frase.length >= 70) { alert(`La frase "${frase.toLowerCase()}" tiene ${frase.length} caracteres y su puntuacion es: Bueno`) }
    else { alert(`La frase "${frase.toLowerCase()}" tiene ${frase.length} caracteres y su puntuacion es: Insufisiente`) };
};

//Ejercicio 18: Evaluación de tres notas con estado final
//*Calcular el promedio
//*Convertir el nombre a mayúsculas
//*Determinar el estado:
//*Promedio ≥ 6.0 → Destacado
//*Promedio ≥ 4.0 → Aprobado
//*Promedio < 4.0 → Reprobado


function ejercicio18() {
    let nombre3 = "Okuyasu Nijimura";
    let note1 = 3.1;
    let note2 = 7.0;
    let note3 = 6.7;
    let promedio = (note1 + note2 + note3) / 3
    if (promedio >= 6.0) { alert(`El estudiante ${nombre3.toUpperCase()} (con ${nombre3.length} caracteres) tiene un promedio de: ${promedio} (Destacado)`) }
    else if (promedio >= 4.0) { alert(`El estudiante ${nombre3.toUpperCase()} (con ${nombre3.length} caracteres) tiene un promedio de: ${promedio} (Aprobado)`) }
    else { alert(`El estudiante ${nombre3.toUpperCase()} (con ${nombre3.length} caracteres) tiene un promedio de: ${promedio} (Reprobado)`) };
};

//Ejercicio 19: Clasificación de desempeño con más niveles
//Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

//Convertir el nombre a mayúsculas
//Clasificar el rendimiento según:
//≥ 6.5 → Sobresaliente --> if
//≥ 6.0 → Muy buen rendimiento --> else-if
//≥ 5.0 → Buen rendimiento --> else-if
//≥ 4.0 → Suficiente --> else-if
//< 4.0 → Insuficiente --> else

//Además:
//Mostrar la cantidad de caracteres del nombre

function ejercicio19() {
    let nombre4 = "Koichi Hirose";
    let noteK = 5.6;
    let noteO = 7.0;
    let noteI = 5.4;
    let promedio2 = (noteK + noteO + noteI) / 3
    if (promedio2 >= 6.5) { alert(`El estudiante ${nombre4.toUpperCase()} (con ${nombre4.length} caracteres) tiene un promedio de: ${promedio2} (Sobresaliente)`) }
    else if (promedio2 >= 6.0) { alert(`El estudiante ${nombre4.toUpperCase()} (con ${nombre4.length} caracteres) tiene un promedio de: ${promedio2} (Muy buen rendimiento)`) }
    else if (promedio2 >= 5.0) { alert(`El estudiante ${nombre4.toUpperCase()} (con ${nombre4.length} caracteres) tiene un promedio de: ${promedio2} (Buen rendimiento)`) }
    else if (promedio2 >= 4.0) { alert(`El estudiante ${nombre4.toUpperCase()} (con ${nombre4.length} caracteres) tiene un promedio de: ${promedio2} (Suficiente)`) }
    else { alert(`El estudiante ${nombre4.toUpperCase()} (con ${nombre4.length} caracteres) tiene un promedio de: ${promedio2} (Insuficiente)`) };
};

// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:

// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico

// Además:

// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento

// Mostrar:

// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación

function ejercicio20() {
    let dinero = 300000
    let objeto = "Bate de baseball"
    let dess1 = dinero * 0.15
    let dess2 = dinero * 0.1
    if (dinero >= 200000) {
        alert(`El producto ${objeto.toLowerCase()} con ${objeto.length} caracteres, tiene un precio de: $${dinero} 
    \nse le aplicara un 15% de descuento, el producto costara en total: $${dinero - dess1} (Producto de Lujo)`)
    }
    else if (dinero >= 100000) {
        alert(`El producto ${objeto.toLowerCase()} con ${objeto.length} caracteres, tiene un precio de: $${dinero} 
    \nse le aplicara un 10% de descuento, el producto costara en total: $${dinero - dess2} (Producto Premium)`)
    }
    else if (dinero >= 50000) {
        alert(`El producto ${objeto.toLowerCase()} con ${objeto.length} caracteres, tiene un precio de: ${dinero}
    \nse le aplicara un 10% de descuento, el producto costara en total: $${dinero - dess2} (Producto Estandar)`)
    }
    else if (dinero >= 20000) {
        alert(`El producto ${objeto.toLowerCase()} con ${objeto.length} caracteres, tiene un precio de: $${dinero}
    \nno se le aplicara descuento (Producto Economico)`)
    }
    else {
        alert(`El producto ${objeto} con ${objeto.length} caracteres, tiene un precio de: ${dinero}
    \nno se le aplicara descuento (Producto Basico)`)
    };
};

// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:

// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente

// Además:

// Clasificar la frase por tamaño:
// 30 → Muy larga
// 20 → Larga
// 10 → Mediana
// ≤ 10 → Corta

function ejercicio21() {
    let homeless = "Por favor Velocidad, necesito esto, mi madre esta un poco sin hogar, vivo con mi padre y quiero ayudarla";
    if (homeless.length >= 90) { alert(`La frase "${homeless.toUpperCase()}"
con ${homeless.length} caracteres, tiene un puntaje Excelente y es una frase muy larga.`) }
    else if (homeless.length >= 80) { alert(`La frase "${homeless.toUpperCase()}"
con ${homeless.length} caracteres, tiene un puntaje Muy bueno y es una frase muy larga.`) }
    else if (homeless.length >= 70) { alert(`La frase "${homeless.toUpperCase()}"
con ${homeless.length} caracteres, tiene un puntaje bueno y es una frase muy larga.`) }
    else if (homeless.length >= 60) { alert(`La frase "${homeless.toUpperCase()}"
con ${homeless.length} caracteres,Tiene un puntaje regular y es una frase muy larga.`) }
    else if (homeless.length < 60 && homeless.length >= 30) { alert(`La frase "${homeless.toUpperCase()}"
con ${homeless.length} caracteres, tiene un puntaje deficiente y es una frase muy larga.`) }
    else if (homeless.length < 60 && homeless.length >= 20) { alert(`La frase "${homeless.toUpperCase()}"
con ${homeless.length} caracteres, tiene un puntaje deficiente y es una frase larga`) }
    else if (homeless.length < 60 && homeless.length >= 10) { alert(`La frase "${homeless.toUpperCase()}"
con ${homeless.length} caracteres, tiene un puntaje deficiente y es una frase mediana`) }
    else { alert(`La frase "${homeless.toUpperCase()}"
con ${homeless.length} caracteres, tiene un puntaje deficiente y es una frase corta`) }
};