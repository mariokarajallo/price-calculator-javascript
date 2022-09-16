//! CONSTRUCTORES
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}
//? prototype de la funcion Seguro
// realiza la cotizacion con los datos cargado por el usuario
Seguro.prototype.cotizarSeguro = function () {
  /*
  referencia para incrementar el valor del el seguro
    1= americano 1.15
    2= asiatico 1.05
    3= europeo 1.35
  */
  let cantidad;
  const base = 2000; // base del seguro de auto

  //basado en el tipo de automovil(marca) el costo sera mayor o menor
  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;
    default:
      break;
  }

  //leer el año: obtenemos el ano actual y restamos con el ano seleccionado en el formulario
  const diferencia = new Date().getFullYear() - this.year;

  // cada año que la diferencia es mayor, el costo va a reducirse un 3% el valor del seguro
  cantidad -= (diferencia * 3 * cantidad) / 100;

  /*
    si el seguro es del tipo basico se multiplica por un 30% mas
    si el seguro es del tipo completo se multiplica por un 50% mas
  */

  if (this.tipo === "basico") {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }

  // retormos el valor cantidad por que utilizamos para mostrar en el HTML
  return cantidad;
};

// a la hora de instanciarlos no pasaremos nada al constructor
// creamos la funcion por que de otra manera no podremos agregar prototype
function UI() {}

//? prototype de la funcion UI
//llena las opciones de los anos
// como no usaremos this, entonces podemos usar arrow function
// funcion que genera HTML y agrega los anhos
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear(),
    min = max - 20;

  // seleccionamos el selector de anho
  const selectYear = document.querySelector("#year");

  // cargamos los anhos en el selector
  for (let i = max; i > min; i--) {
    // creamos el elemento "option "para el selector
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    //agregamos en el HTML
    selectYear.appendChild(option);
  }
};

// muestra alertas en la pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  //creamos el elemento DIV para asignar un mensaje
  const div = document.createElement("div");

  //tenemos dos tipos de mensajes ERROR & CORRECTO (estilos CSS), agregamos la CLASE a nuestro DIV
  if (tipo === "error") {
    div.classList.add("error"); //agregamos el estilo de la clase error
  } else {
    div.classList.add("correcto"); // agregamos el estilo de la clase correcto
  }
  div.classList.add("mensaje", "mt-10");

  // asignamos un mensaje al DIV
  div.textContent = mensaje; // asignamos el mensaje que recivimos como parametro

  //insertar en el HTML, antes seleccianamos el formulario que es donde queremos insertar nuestro DIV
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.insertBefore(div, document.querySelector("#resultado"));

  //elimina el mensaje despues de 2seg luego de mostrarlo en pantalla
  setTimeout(() => {
    div.remove();
  }, 2000);
};

//instanciar UI
const ui = new UI();
console.log(ui);

//! EVENT LISTENER
document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones(); // llena el select con los anhos...
});

eventListener();
function eventListener() {
  //seleccionamos el boton principal y agregamos una funcion a su evento submit
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  // leer el valor de la marca seleccionada
  const marca = document.querySelector("#marca").value;

  // leer el anho seleccionado
  const year = document.querySelector("#year").value;

  // leer el tipo de cobertura
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  //si cualquiera de los campos esta vacio entonces...
  if (marca === "" || year === "" || tipo === "") {
    // pasamos a nuestro prototipo el mensaje y el tipo de error
    ui.mostrarMensaje("todos los campos son obligatarios", "error");
    return; //return para que evitar que ejecute lo que sigue, si no se pasa la validacion
  }
  ui.mostrarMensaje("cotizando...", "exito");

  // una vez que estamos cotizando debemos pasar los datos cargados para procesar la cotizacion
  // instanciar el seguro (objeto con los datos que le usuario haya cargado)
  const seguro = new Seguro(marca, year, tipo);
  seguro.cotizarSeguro(); // mandamos llamar al prototypo

  // utilizar el prototype que va a cotizar
}
