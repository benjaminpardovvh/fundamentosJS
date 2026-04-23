console.log(`conexión con JS exitosa`);

/*
==============================================
1.-que es una condicion en Java Script?
==============================================
una condición nos permite tomar desiciones en el código.
Separando dos caminos, el si(if) y el no(else).

estructura basica(sintáxis --> reglas del lenguaje de programación)

if (condicion){
    //código que se ejecuta si la condicion es verdadera.
} else {
    //el código que se ejecuta si la condicion es falsa
}
*/

//ejemplo 1 (numerico)
let edad = 18;

if (edad >= 17) {
    console.log(`eres mayor de edad`);
} else {
    console.log("eres menor");
}

//ejemplo 2: 2 posibles caminos
let temperatura = 10;

if (temperatura > 20) { //condicion si
    console.log(`hace calor`);
} else { //condicion no
    console.log("hace frio");
}

//Ejemplo 3: if-else if-else
let nota = 6.0

if(nota>=6.0) {
    console.log(`excelente!`)
}else if (nota >= 4.0) {
    console.log("aprobado")
}else{
    console.log("reprobado, estudia más!")
}

//ejemplo 4: condiciones con strings
let nombre= "Johnny"

//comparacion exacta(===)
if(nombre === "Johnny") {
    console.log(`Hola ${nombre}`)
} else {
    console.log(`Tu no eres Johnny`)
}

/*
OPERADORES DE COMPARACION
> = mayor que
< = menor que
">=" = mayor o igual
"<=" = menor o igual
"===" = igualdad extricta
"!--" = distinto extricto
"==" = igualdad
"!=" = distinto
*/
//Ejemplo de distinto 
let num1 = 10;
let num2 = 5;

if(num1!==num2) {
    console.log(`El numero: ${num1} es distinto a ${num2}`)
} else {
    console.log(`Los numeros son iguales`)
}
