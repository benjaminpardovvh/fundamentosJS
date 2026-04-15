console.log("conexion con js exitosamente hecha");
/*
Dato: tipo texto (string)
concentación de texto con el signo +
podemos unir texto y varialbles
*/
//concatenación: unir texto y/o variables.
const nombre = "Benjamin";
const apellido = "Pardo";
//unimos ambas constantes con un texto extra
console.log("hola, mi nombre es: " + nombre + " " + apellido);

/*
2.- ver el tipo de datos (typeof)
*/
console.log("la variable nombre es un tipo de dato: " + typeof nombre);
//template literals (forma moderna para concatenar)
console.log(`Huola, mi nombre es ${nombre} ${apellido}`);

//Mostrar el largo de un string(texto)-contar los caracteres
let palabra = "paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} caracteres`);

//crear una frase y contar sus caracteres
let jojo = "mi hermano es un vampiro y mato a mi padre";
console.log(`la frase '${jojo}' tiene ${jojo.length} caracteres`);

// métodos comunes en JS para formatear texto
// Transformar texto en Mayúsculas .toUpperCase
let textolo = "JAvaScrIPT eS Lo mejoR";
console.log(textolo.toUpperCase());

//transformar texto a minuscula .toLowerCase
console.log(textolo.toLowerCase())

//buscar un texto dentro de un string .includes()
let texto2 = "leche, azucar, peras, huevos, harina"
console.log(texto2 .includes("huevos")); //true

//convertir una variable a texto
let telefono = 95676920;
let telefono_texto = String(telefono);
console.log(`mi numero de telefono es ${telefono_texto}
es del tipo: ${typeof telefono_texto}`);