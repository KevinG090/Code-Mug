import Header from "../components/Header";

<Header />;

const ActualizarProducto = () => {
  return (
    <div>
      <body class="ventas">
        <div class="main-div">
          <h1 class="titulo-actualizar-producto">Actualizar Producto</h1>
          <div class="Cuadro-de-datos">
            <p class="p1">Id</p>
            <p class="extra">#####</p>
          </div>
          <div class="Cuadro-de-datos">
            <p class="p2">Nombre</p>
            <input type="Nombre" placeholder="Escriba el nombre" />
          </div>
          <div class="Cuadro-de-datos">
            <p class="p3">Precio</p>
            <input type="Precio" placeholder="Escriba el precio" />
          </div>
          <div class="margen">
            <button class="boton-venta button-g x " id="open">
              Actualizar
            </button>

            <div id="contenedorpopup" class="contenedor-pop">
              <div class="popup">
                <h1>
                  Producto Actualizado Exitosamente{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-checks"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                </h1>
                <button class="boton-ver-ventas">Ver Productos</button>
                <button class="boton-nueva-venta">Nuevo Producto</button>
                {/* <!-- boton X eliminado --> */}
                <button id="cerrar" class="cerrar-pop-venta">
                  X
                </button>
              </div>
            </div>
          </div>
        </div>

        <script src="js/popup.js"></script>
      </body>
    </div>
  );
};
export default ActualizarProducto;