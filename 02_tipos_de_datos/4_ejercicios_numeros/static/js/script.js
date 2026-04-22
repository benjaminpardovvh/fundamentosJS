console.log("conexión exitosa");

// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en consola.

function edadProyectada() {
    let edadActual = 16; //cumplo el 27 profe, no se si poner 17 cuando ya los cumpla o que se yo
    alert(`Mi edad ahora es ${edadActual} años. \nMi edad en 5 años va a ser de ${edadActual + 5} años. \nY hace 10 años tenia ${edadActual - 10} años`);
};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento() {
    let producto = 25000;
    alert(`El 20% de 25000 es de ${producto * 0.20}.\nEl precio final es de ${producto = producto - (producto * 0.2)}`);
};

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas() {
    let nota1 = 5.6;
    let nota2 = 4.1;
    let nota3 = 7.0;
    let totalNotas = nota1 + nota2 + nota3;
    alert(`el promedio seria de ${totalNotas / 3}.\nQue redondeado seria ${Math.round(totalNotas / 3)}.`);
};

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura() {
    let temperatura = 25;
    alert(`La temperatura actual es ${temperatura}°.\nLuego sera de ${temperatura + 3}°.\nPara finalmente ser de ${temperatura - 5}°.`);
};

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function calcularSuedo() {
    let plataHora = 8000;
    let horas = 45;
    alert(`el sueldo es de ${plataHora * horas} pesos sin trabajar horas extras.\nEl sueldo si trabajara 5 horas extras es de ${(horas += 5) * plataHora}`);
};

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola

function divisionResto() {
    let number1 = 5
    let number2 = 15
    alert(`La division de 5 y 15 resulta en ${number1 / number2}.\nY su resto es de ${number1 % number2}`);
    alert(`El resto es lo que sobra de la division, en este caso, el resto es 0 porque la division es justa.`)
}

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10

function comparacionNumeros() {
    let numero1 = 40
    let numero2 = 30
    alert(`¿El primer numero es mayor que el segundo? (${numero1 >= numero2})\n¿El segundo numero es mayor que 10? (${numero2 >= 10})`)
};

// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado

function notacionCientifica() {
    let poblacion = 1e7
    alert(`la poblacion es de ${poblacion}.\nAhora los dividiremos en 4 grupos.\nLa cantidad de gente es de ${poblacion / 4} por grupo`)
};

// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

function calculo() {
    let tres = 3
    alert(`${tres} Es nuestro numero base.\n${tres ** 4} Es nuestro valor base elevado a 4.\n${(tres ** 4) * 2} Es lo que teniamos multiplicado por 2.\nY finalmente ${((tres ** 4) * 2) - 10} es nuestro valor final.`)
};

// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function gambling() {
    let gambling = (Math.random() * 6) + 1
    alert(`voy a tirar un dado, si sale 4 o mayor, ganas, de lo contrario pierdes, veamos tu suerte...`)
    if (gambling >= 4) {
        alert(`¡¡GANASTE!!`)
    } else {
        alert(`Perdiste... mejor suerte para la proxima...`)
    };
};
