
const saludo ="Hola Mundo";
const texto ="Hola me llamo Ale y tengo 27 años, a Ale le gusta Pablo y lo llama Beshi."

console.log(saludo.length);
console.log(saludo.substring(0,4));
console.log(saludo.split(" "));

const arreglo = Array(3).fill("Hola mundo");

console.log(arreglo);
console.log(saludo.split("").reverse().join(""));

console.log((texto.split("Ale").length - 1))

const alDerecho = "salas";

function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(palindrome("salas"));

const eliminarUnPatron = "xyz1, xyz2, xyz3, xyz4 y xyz5";

console.log (eliminarUnPatron.replaceAll("xyz"," "));

function arregloRepetido (num,str) {
    console.log(Array(num).fill(str));
}

arregloRepetido(3,"Beshi");

function contarPalabras (str) {
    console.log(str.split("").reverse().join(""));
}

contarPalabras("Hello");


function numeroPrimoCheck (numeroPar){
    if(numeroPar % 2 == 0){

        return "Par"
    }else{
       return "Impar"
    }
}

console.log(numeroPrimoCheck(4));

function centaFarenheit (grados) {
    console.log(((grados)*1.8) + 32);
}

centaFarenheit(30);

function bin_to_dec(bstr) { 
    return parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
}
console.log(bin_to_dec('100'));

function descuentos (totalSinDescuento,porcentajeDescuento) {
   let descuento = ((porcentajeDescuento*totalSinDescuento)/100);
   let totalaPagar = totalSinDescuento - descuento;
    return totalaPagar;
}

console.log(descuentos(500,10));

function contadorAños () {

    const date1 = new Date('7/13/2010');
    const date2 = new Date;
    const diffTime = Math.abs(date2 - date1);
    if (diffTime){
        getYearsToSeconds(diffTime);
    }
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffTime);
    // console.log(diffDays);
 }

contadorAños();

function getYearsToSeconds (miliSeconds){
    let setSeconds = miliSeconds/1000;
    if (setSeconds){
           console.log("tengo segundos", setSeconds);
         let setMinutes = setSeconds/60;
          if (setMinutes){
            console.log("tengo minutos", setMinutes);
            let setHours = setMinutes/60;
            if (setHours){
              console.log("tengo Horas", setHours);
              let setDays = setHours/24;
              if (setDays){
                console.log("tengo días", setDays);
                let setMeses = setDays/30;
                if (setMeses){
                  console.log("tengo meses", setMeses);
                  let setYears = setMeses/12;
                  if (setYears){
                    console.log("tengo años", setYears);
                    let comprobacion = ((((((setYears*12)*30)*24)*60)*60)*1000);
                    if (comprobacion){
                      console.log(comprobacion == miliSeconds);
                      console.log(parseInt(setYears));
                      console.log(setYears.toFixed(2));

                    }
                  }
                }
              }
            }
          }
}
}

function vocalConsonante (str){
    let quitarEspacios = str.replaceAll(" ","");
    console.log (quitarEspacios);
    let aMinusculas = quitarEspacios.toLowerCase();
    console.log (aMinusculas);
    console.log(aMinusculas.length);
     let numeroA = aMinusculas.split("a").length - 1;
     let numeroE = aMinusculas.split("e").length - 1;
     let numeroI = aMinusculas.split("i").length - 1;
     let numeroO = aMinusculas.split("o").length - 1;
     let numeroU = aMinusculas.split("u").length - 1;
          let numeroDeVocales = numeroA + numeroE + numeroI + numeroO + numeroU;
          return console.log (aMinusculas.length - numeroDeVocales);



}

vocalConsonante("Hola Mundo");

function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  } 

 console.log( validateEmail("pablocmrgo@hotmail.com"));

 function validateName(element){      
    var namePattern = /^[a-zA-Z ]{2,30}$/;
    return namePattern.test(element); 
  } 

 console.log( validateName("alejandra de la torre"));

const arregloDeEjemplo = [10,2,3,4,5,6,7,8,9,8];
const arregloDeEjemplo2 = [...arregloDeEjemplo];
const arregloDeEjemplo3 = ["x",10,"x",2,"10",10,true,true];
const nuevoArray = [];
arregloDeEjemplo.forEach(el => {
  nuevoArray.push(Math.pow(el,2));
});

console.log(nuevoArray);

function numeroMayor (){
const max = Math.max(...arregloDeEjemplo);

console.log(max);
}

numeroMayor();

function numeroMenor (){
const min = Math.min(...arregloDeEjemplo);

console.log(min);
}

numeroMenor();


  const arrayParImpar = [];

  arregloDeEjemplo.forEach(el => {
    if(el % 2 == 0){

      return console.log("Par")
  }else{
     return console.log("Impar")
  }

  });

const lowestToHighest = arregloDeEjemplo.sort((a, b) => a - b);
const highestToLowest = arregloDeEjemplo2.sort((a, b) => b - a);

console.log(lowestToHighest);
console.log(highestToLowest);

  const nuevoObjeto = {
    lowestToHighest,
    highestToLowest,
  }

  console.log(nuevoObjeto);


let uniqueChars = [...new Set(arregloDeEjemplo3)];

console.log(uniqueChars);


let sum = arregloDeEjemplo.reduce((previous, current) => current + previous);
let avg = sum / arregloDeEjemplo.length;

console.log(avg);

// class peliculas {
//   constructor({id,titulo,director,anoDeEstreno,paisOrigen,generos,calificacion}){
//   this.id = id;
//   this.titulo = titulo;
//   this.director = director;
//   this.anoDeEstreno = anoDeEstreno;
//   this.paisOrigen = paisOrigen;
//   this.generos = generos;
//   this.calificacion = calificacion;

//     this.validarIMDB(id);
//  }
//     validarCadena(propiedad,valor){
//     if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
    
//     if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado NO es una cadena de texto`);
    
//     return true;
//     }

//     validarLongitudCadena(propiedad,valor,longitud){
//       if(valor.length>longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos ${longitud}`);

//       return true;
//     }
    
//     validarNumero(propiedad,valor){
//       if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
      
//       if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado NO es un número`);
      
//       return true;
//       }
   

//     validarIMDB(id){
//       if(this.validarCadena("IMDB id", id)){
//         if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
//           return console.error(`"IMDB id "${id}" no es válido, debe tener 9 caracteres, 2 letras y 7 números`);

//         }
//       }

//     }
    
//     validarTitulo(titulo){
//       if(this.validarCadena("Titulo",titulo)){
//         this.validarLongitudCadena("Titulo",titulo,100);

//         }
//       }
    
//       validarDirector(director){
//         if(this.validarCadena("Director",director)){
//           this.validarLongitudCadena("Director",director,50);
  
//           }
//         }

// }

//   const nuevaPelicula = new peliculas({
//     id:"tt3799232",
//     titulo: "The kissing booth",
//     director = "Vince Marcello",
//     anoDeEstreno = 2018,
//     paisOrigen = "USA",
//     generos = [comedy,romance],
//     calificacion = 6,

//   })

  let fecha = new Date ();
  
  let fechaDeHoy = fecha.toDateString();
  let fechaLarga = fecha.toString();

  let formatoFecha = (`Today is ${fechaDeHoy}`);

  console.log(formatoFecha, fechaLarga);

  
