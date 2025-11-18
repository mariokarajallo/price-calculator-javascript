<div align="center">
  <h1>Price Calculator 🧮🚗</h1>
  <sup>Calculadora de precio de pólizas de seguro de automóviles (proyecto educativo)</sup>
</div>


Pequeña aplicación web estática que calcula el costo estimado de una póliza de seguro de automóvil en función de la marca, el año y el tipo de póliza (Básico o Completo). Ideal para practicar DOM, validaciones y programación con JavaScript puro.

## Demo 
Para ver la demo del proyecto visita: [Price Calculator](https://jsproyecto5.netlify.app/)

![preview](price-calculator.gif)

## Características

- Interfaz sencilla para seleccionar marca, año y tipo de póliza.
- Cálculo dinámico del precio según criterios seleccionados.
- Validaciones de formulario y mensajes de error.
- Resultado mostrado con resumen detallado de la cotización.

## Tecnologías utilizadas

- **JavaScript** - Lógica de la calculadora y validaciones.
- **HTML5** - Estructura de la página.
- **CSS** + **Tailwind** - Estilos y diseño responsivo.

## Instalación y requisitos

Requisitos mínimos:

- Navegador moderno (Chrome, Firefox, Edge, Safari).
- No requiere servidor, pero puedes servirlo localmente para evitar restricciones de CORS al probar recursos.

Pasos para correrlo localmente:

1. Clona el repositorio o descarga los archivos.
2. Abre `index.html` directamente en tu navegador, o sirve el proyecto con un servidor estático:

```bash
# con Python 3
python3 -m http.server 8000

# abrir en: http://localhost:8000
```

O usa la extensión Live Server en VSCode para una vista previa en caliente.

**Cómo funciona**

La app presenta un formulario donde el usuario selecciona:

- Marca del automóvil.
- Año del vehículo.
- Tipo de póliza: `Básico` o `Completo`.

Al enviar, el script en `js/app.js` calcula el precio base y aplica factores según marca, antigüedad y tipo de póliza. El resultado se muestra con un resumen y un mensaje de estado.

Validaciones
-----------

- Todos los campos son obligatorios; si falta alguno, se muestra un mensaje de error.
- El año debe ser un valor entre el año actual y el límite definido por la lógica del proyecto.
- Se previenen envíos repetidos mostrando un estado de procesamiento mientras se calcula.

**Estructura de archivos**

```bash
price-calculator-javascript/    # raíz del proyecto
├── index.html                 # Página principal y UI
├── LICENSE                    # Licencia del proyecto (MIT)
├── README.md                  # Documentación del proyecto (este archivo)
├── css/
│   ├── custom.css             # Estilos personalizados
│   └── tailwind.css           # Estilos generados por Tailwind
└── js/
    └── app.js                 # Lógica de la calculadora y validaciones
```


- `index.html` — Interfaz de usuario y formulario principal.
- `js/app.js` — Lógica para calcular la póliza y validar el formulario.
- `css/custom.css` — Estilos personalizados.
- `css/tailwind.css` — Utilidades y estilos de Tailwind.
- `LICENSE` — Información de la licencia (MIT).
- `README.md` — Documentación del proyecto.

**Contribuciones**

Si quieres contribuir:

1. Haz un fork del repositorio.
2. Crea una rama con tu mejora: `git checkout -b feat/nombre-de-la-mejora`.
3. Realiza tus cambios y agrega tests o instrucciones si aplica.
4. Envía un pull request describiendo los cambios.

Sugerencias para contribuir:

- Añadir pruebas unitarias para la función de cálculo.
- Mejorar accesibilidad del formulario (labels, aria-attributes).
- Añadir más marcas y una tabla de factores de cálculo.

**Créditos**

- **Juan Pablo De la Torre Valdez** - Instructor y autor del contenido del curso - [Codigo Con Juan](https://codigoconjuan.com/).
- **Mario Karajallo** - Implementación del proyecto y mantenimiento - [Mario Karajallo](https://karajallo.com).

 **Licencia**

Este proyecto está bajo la licencia MIT. Véase `LICENSE.md` para más detalles.

---

⌨️ con ❤️ por [Mario Karajallo](https://karajallo.com)