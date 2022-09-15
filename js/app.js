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

//instanciar UI
const ui = new UI();
console.log(ui);

//! EVENT LISTENER
document.addEventListener("DOMContentLoaded", () => {});
//! FUNCIONES
