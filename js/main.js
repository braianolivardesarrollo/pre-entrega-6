const productos = [
  {
    id: 1,
    nombre: "Pinza",
    descripcion: "pinza de fuerza, marca knipex",
    precio: 500,
    imagen: "./img/pinza.webp",
  },
  {
    id: 2,
    nombre: "Destornillador Plano",
    descripcion: "destornillador plano 20mm, knipex",
    precio: 250,
    imagen: "./img/destornilladorPlano.webp",
  },
  {
    id: 3,
    nombre: "Alicate",
    descripcion: "Alicate corte diagonal, knipex",
    precio: 600,
    imagen: "./img/alicateCorteDiag.webp",
  },
  {
    id: 4,
    nombre: "Destornillador Philips",
    descripcion: "destornillador punta philips, knipex",
    precio: 250,
    imagen: "./img/destornilladorPhilips.webp",
  },
  {
    id: 5,
    nombre: "Llaves Allen ",
    descripcion: "juego de llaves allen milimetricas 1mm a 13mm, Bremen",
    precio: 850,
    imagen: "./img/llavesAllen.webp",
  },
  {
    id: 6,
    nombre: "Soldador ",
    descripcion: "soldador de estaño 70w, Total",
    precio: 1200,
    imagen: "./img/soldador.webp",
  },
  {
    id: 7,
    nombre: "Multimetro",
    descripcion: "multimetro digital Mod.117, Fluke",
    precio: 5000,
    imagen: "./img/multimetroDigital.webp",
  },
  {
    id: 8,
    nombre: "kit electronica",
    descripcion: "kit de componentes electrónicos",
    precio: 1800,
    imagen: "./img/kitComponentes.webp",
  },
];

let nombresProductos = [];

const consultarProductos = prompt(
  "¿Querés conocer los materiales disponibles? (si/no)"
);

if (consultarProductos.toLowerCase() === "si") {
 nombresProductos = productos.map((producto) => producto.nombre);

  console.log("Materiales disponibles:", nombresProductos);
}

function buscarProductos() {

let mensajeBusqueda = "Seleccione el nombre del producto que desea buscar";

if (nombresProductos.length > 0) {
  mensajeBusqueda += "\n\nMateriales disponibles:\n" + nombresProductos.join("\n");
}

const textoBuscado = prompt(mensajeBusqueda);

  const productosEncontrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(textoBuscado.toLowerCase())
  );

console.log("Productos encontrados:", productosEncontrados);
}

buscarProductos();

function buscarProductoPorId() {
  const idBuscado = Number(
    prompt("Ingrese el ID del producto que desea buscar")
  );

  const productoEncontrado = productos.find(
    (producto) => producto.id === idBuscado
  );

console.log("Producto encontrado:", productoEncontrado);
}

buscarProductoPorId();

const consultarTotal = prompt(
  "¿Querés consultar el valor total de los productos? (si/no)"
);

if (consultarTotal.toLowerCase() === "si") {
  const valorTotal = productos.reduce(
    (total, producto) => total + producto.precio,
    0
  );

  console.log("Valor total de los productos: $" + valorTotal);
}