//! CONSTRUCTORES
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}
// a la hora de instanciarlos no pasaremos nada al constructor
// creamos la funcion por que de otra manera no podremos agregar prototype
function UI() {}

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
}
