
// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector);
// console.log(document.querySelector(".link-DOM").getAttribute("href"));
// document.documentElement.setAttribute("lang","es");
// console.log(document.documentElement.lang);

// const $linkDom = document.querySelector(".link-DOM");

// //la página link se abre en una pestaña adicional, no la misma
// $linkDom.setAttribute("target","_blank");
// //evita que las páginas se relacionen entre sí
// $linkDom.setAttribute("rel","noopener");
// //cambia el link al que se dirige
// $linkDom.setAttribute("href","https://www.youtube.com/watch?v=tXsQJhoauxc&ab_channel=LumineersVEVO");
// //boolean si hay un elemento
// console.log($linkDom.hasAttribute("rel"));
// //remover un atributo
// // $linkDom.removeAttribute("rel");
// // console.log($linkDom.hasAttribute("rel"));

// //       ESTILOS   CSS

// // notación de punto permite acceder como js a stilos con codigo en cammelcase
// // css tiene una notacion con - y lower cammel case
// console.log($linkDom.style);

// $linkDom.style.setProperty("text-decoration","none");
// // que aparezca en un recuadro
// $linkDom.style.setProperty("display","block");
// // que el recuadro ocupe solo el 50% del renglon
// $linkDom.style.width = "50%";
// // centrar letras
// $linkDom.style.textAlign = "center";
// $linkDom.style.marginLeft = "auto";
// $linkDom.style.marginRight = "auto";
// // bordes más anchos
// $linkDom.style.padding = "1rem";
// // redondear bordes
// $linkDom.style.borderRadius = "0.5rem";

// //         VARIABLES CSS - CUSTUM PROPERTIES CSS

// const $html = document.documentElement,
//       $body = document.body;

// let darkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//     yellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(darkColor,yellowColor);

// $body.style.backgroundColor = darkColor;
// $body.style.color = yellowColor;


// const $card = document.querySelector(".card");

// console.log($card);
// ////obtener nombre de la clase
// console.log($card.className);
// //// obtener el DOMTokenList con los atributos que contiene el elemento
// //del DOM
// console.log($card.classList);
// //// boolean para ver si contiene una clase
// console.log($card.classList.contains("rotate-45"));
// ////añade un atributo al elemento
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// ////para remover una clase
// $card.classList.remove("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// ////prende y apaga la clase en cuestion, es una palanca on/off
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// //// remplaza una clase
// $card.classList.replace("rotate-45","rotate-135");
// //// se puede agregar o quitar o toggle más de una clase a la vez
// $card.classList.add("opacity-80","sepia");


// const $whatisDOM = document.getElementById("que-es");

// let text = `
// <p>
// El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>)
// es un API para documentos HTML y XML.
// </p>
// <p>
// Este proveèuna representación estructural del documento, permitiendo modificar su contenido
// y presentación visual mediante código JS.
// </p>
// <p>
// <mark>El DOM no es parte de la especificación de JavaScript, es una API
// para los navegadores.</mark>
// </p>
// `
// ////innertext es para internet explorerno reconoce las etiquetas 
// // HTML solo reemplaza el texto con todo y etiquetas
// // $whatisDOM.innerText = text;
// // // textcontent es el estandar pero sigue sin reconocer el HTML
// // $whatisDOM.textContent = text;
// // /// este si lo renderiza como HTML
// $whatisDOM.innerHTML = text;

// // $whatisDOM.outerHTML = text;



//     RECORRIENDO (TRAVERSING) EL DOM 
// Para recorrer elementos de los nodos del DOM

// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.parentNode);
// console.log($cards.firstChild);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);


// console.log($cards.previousSibling);
// console.log($cards.previousElementSibling);
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section"));

/////////   ETIQUETAS DINAMICAS HTML /////////


// const $figure = document.createElement("figure"),
//     $img = document.createElement("img"),
//     $figcaption = document.createElement("figcaption"),
// ////crea un nodo de texto
//     $figcaptionText = document.createTextNode("Animals"),
//     $cards = document.querySelector(".cards");



// ///// CREAR NUEVO NODO//// crear elemento hijo al final de la lista
// //// de un elemento padre especificado




// $cards.appendChild($figure);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $figure.appendChild($figcaptionText);
// $img.setAttribute("src","https://placeimg.com/200/200/animals");
// $img.setAttribute("alt","Animals");
// $figure.classList.add("card");


// /////Hcer contenido dinamico sin crear nuevo nodo

// const $figure2 = document.createElement("figure");

// $figure2.innerHTML = `
// <img src = "https://placeimg.com/200/200/people" alt ="People">
// <figcaption>People</figcaption>
// `;

// $figure2.classList.add("card");
// $cards.appendChild($figure2);


// ///////crear multiples nodos



// const estaciones = ["primavera","verano","otoño","invierno"],
//       $ul = document.createElement("ul");

// // document.write(<h3>Estaciones del año</h3>);
// document.body.appendChild($ul);

// estaciones.forEach(el=>{
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $ul.appendChild($li);
// });

// ///Crear listas dinamicas cuando tenemos muchos elementos, sirve para pegar
// // de una sola vez todo, mejoran el rendimiento de la aplicación

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
// ],

// $ul3 = document.createElement("ul"),
// $fragment = document.createDocumentFragment();

// meses.forEach(el => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $fragment.appendChild($li);
// });

// // document.write("Meses del Año");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

// const $cards = document.querySelector(".cards"),
//     $template = document.getElementById("template-card").content,
//     $fragment = document.createDocumentFragment(),


// cardContent = [
//     {
//         title: "Tecnología",
//         img: "https://placeimg.com/200/200/tech",
//     },
//     {
//         title: "Animales",
//         img: "https://placeimg.com/200/200/animals",
//     },
//     {
//         title: "Arquitectura",
//         img: "https://placeimg.com/200/200/arch",
//     },
//     {
//         title: "Gente",
//         img: "https://placeimg.com/200/200/people",
//     },
//     {
//         title: "Naturaleza",
//         img: "https://placeimg.com/200/200/nature",
//     },
// ];

// cardContent.forEach(el => {
//     $template.querySelector("img").setAttribute("src",el.img);
//     $template.querySelector("img").setAttribute("alt",el.title);
//     $template.querySelector("figcaption").textContent = el.title;

// let $clone = document.importNode($template,true);
//     $fragment.appendChild($clone);

// });

// $cards.appendChild($fragment);


///////////// DOM: Modificando Elementos (Old Style)

/* 
const $cards = document.querySelector(".cards"),
      $newCard = document.createElement("figure");


     let $contentCard = `
     <img src= "https://placeimg.com/200/200/any" alt = "Any">
     <figcaption></figcation>
     `; 

     $newCard.classList.add("card");
     $cards.replaceChild($newCard,$cards.children[2]);

    $cards.insertBefore($newCard,$cards.firstElementChild);
    const $cloneCards = $cards.cloneNode(true);

    document.body.appendChild($cloneCards);

    $newCard.insertAdjacentHTML("beforeend",$contentCard);

    
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");

    $cards.insertAdjacentElement("afterbegin",$newCard);

 */

//////// EVENTOS

export function holaMundo(event) {
    alert('Hola Mundo');
    console.log(event);
}

function saludar(nombre="Desconocido") {
    alert(`Hola ${nombre}`);
}

const $eventoSemantico = document.getElementById("eventoSemantico"),
$eventoMultiple = document.getElementById("eventoMultiple");

// $eventoSemantico.onclick = holaMundo;

// $eventoMultiple.addEventListener("click",(e)=>{
//     alert("Hola Ale, como estás");
//     console.log(e.type);
//     console.log(event);
    
// };

// $eventoMultiple.addEventListener("click",()=>saludar());

$eventoMultiple.addEventListener("click",()=>{
    saludar();
    saludar("Alex");

});

const $removerEvento = document.getElementById("removerEvento");

$removerEvento.addEventListener("click",(e) =>{
    alert(`Removiendo evento de tipo ${e.type}`);
    console.log(e);
    // $removerEvento.removeEventListener("dblclick",removerDobleClick);
    $removerEvento.disabled = true;
});

// $removerEvento.removeEventListener("dblclick",removerDobleClick);


const $divsEventos = document.querySelectorAll(".flujoDeEventos div"),
      $linkeventos = document.querySelector(".flujoDeEventos a");

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo desencadenó ${e.target.className}`);
    // e.stopPropagation();
}

document.addEventListener("click", (e) =>{
    console.log("click en", e.target);

    if(e.target.matches(".flujoDeEventos a")){
        alert("Hola soy Ale deteniendo el default del link");
        e.preventDefault();
    }
});

$divsEventos.forEach(div => {
    div.addEventListener("click",flujoEventos);
});




$linkeventos.addEventListener("click",(e) => {
    alert("Hola soy Ale deteniendo el default del link");
});

$linkeventos.addEventListener("click",(e) => {
    alert("Hola soy Ale deteniendo el default del link");
    e.preventDefault();
    e.stopPropagation();
});


// window.addEventListener("resize",(e)=>{
//     console.clear();
//     console.log("-----EVENTO RESIZE-----");
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
//     console.log(window.outerWidth);
//     console.log(window.outerHeight);
//     console.log(e);
// });

// window.addEventListener("scroll",(e)=>{
//     console.clear();
//     console.log("-----EVENTO SCROLL-----");
//     console.log(window.scrollX);
//     console.log(window.scrollY);
//     console.log(e);

// });

// const $btnAbrir = document.getElementById("abrirVentana"),
//       $btnCerrar = document.getElementById("cerrarVentana"),
//       $btnImprimir = document.getElementById("imprimirVentana");


// let ventana;

// $btnAbrir.addEventListener("click", (e)=>{
//     ventana = window.open("https://jonmircha.com");
// });

// $btnCerrar.addEventListener("click", (e)=>{
//     ventana.close();
// }); 

// $btnImprimir.addEventListener("click", (e)=>{
//     window.print();
// });


// console.log("------------OBJETO URL---------");
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.pathname);


// console.log("------------OBJETO HISTORIAL---------");
// console.log(history);
// console.log(history.length);

// console.log("------------OBJETO NAVEGADOR---------");
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);


