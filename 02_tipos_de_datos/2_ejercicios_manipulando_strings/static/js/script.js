console.log("conexion hecha de forma exitosa");


// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let edad = 25;
let nombre = "Camila";
console.log(`ella es ${nombre}, tiene ${edad} años, y su edad es un \ndato tipo ${typeof edad} (numero)`);
// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna = "maipú";
let region = "metropolitana";
console.log(`soy de ${comuna.toUpperCase()} , que esta en la Region ${region.toLowerCase()}`);
// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python";
console.log(`la palabra '${lenguaje.toUpperCase()}' tiene ${lenguaje.length} caracteres y es dato tipo '${typeof lenguaje}'.`);
// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let frase = "Me encanta programar en JavaScript"; //ps:prefiero html
console.log(`la frase: '${frase.toLowerCase()}' tiene ${frase.length} caracteres. 
(se encuentra la palabra 'javascript'?) ${frase.includes("JavaScript")}`);
// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras = "arroz, fideos, aceite, sal";
console.log(`${compras.toUpperCase()} (existe el aceite?) ${compras.includes("aceite")} 
(la cantidad de caracteres es de: ${compras.length})`);
// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = 456;
let numeroCasaTexto = String(numeroCasa);
console.log(`Esa casa es la ${numeroCasaTexto}, el numero de la casa es un dato tipo: '${typeof numeroCasaTexto}' y tiene la cantidad de ${numeroCasaTexto.length} caracteres.`)
// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let nombre1 = "Diego";
let apellido1 = "Rojas";
let nombrecompleto = `${nombre1} ${apellido1}`
console.log(`${nombrecompleto} (la cantodad total de caracteres es de: ${nombrecompleto.length})`.toUpperCase());
// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase1 = "Hoy aprenderemos sobre strings.";
console.log(`${frase1.toUpperCase()} 
(Existe la palabra 'strings'?) ${frase1.includes("strings")} 
(La cantidad de caracteres es de: ${frase1.length})`);
// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto = "Programar es divertido";
console.log(`${texto} \n ${texto.toLowerCase()} \n ${texto.toUpperCase()} (cantidad de caracteres=${texto.length})`);
// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// año: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C";
let año = 2026;
let añotexto = String(año);
console.log(`${curso}, ${añotexto} (el año es un dato tipo:'${typeof añotexto}' y tiene ${añotexto.length} caracteres)`.toUpperCase());