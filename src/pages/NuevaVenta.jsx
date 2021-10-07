import React from "react";

export const NuevaVenta = () => {
  return (
    <div>
      <body class="ventas">
        <div class="info">
          <div class="titulo-contenedor">
            <h1>NUEVA VENTA</h1>
            <button id="open" class="boton-venta button-g">
              Guardar
            </button>

            <div id="contenedorpopup" class="contenedor-pop">
              <div class="popup">
                <h1>
                  Venta Agregada{" "}
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
                <button class="boton-ver-ventas">Ver Ventas</button>
                <button class="boton-nueva-venta">Nueva Venta</button>
                {/* <!-- boton X eliminado --> */}
                {/* <!-- <button id="cerrar" class="cerrar-pop-venta"> 
              X
            </button> --> */}
              </div>
            </div>
          </div>

          <div>
            <form cellspacing="6">
              <div class="controls">
                <label>
                  <span>Cliente</span>
                  <input class="estilizar" type="text" />
                </label>
                <label>
                  <span>Direccion</span>
                  <input class="estilizar" type="text" />
                </label>
                <label>
                  <span>Contacto</span>
                  <input class="estilizar" type="text" />
                </label>
              </div>
            </form>
          </div>
        </div>

        <section class="section-ventas">
          <table class="ventas">
            <thead>
              <tr>
                <th scope="row">Cantidad</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123412</td>
                <td>
                  <selection>
                    <select name="Descripcion">
                      <option>"1"</option>

                      <option>"2"</option>

                      <option>"3"</option>
                    </select>
                  </selection>
                </td>

                <td>Price</td>
                <td>Total</td>
              </tr>
            </tbody>
            <tfoot class="alinear">
              <tr>
                <td></td>
                <td></td>
                <td>Total:</td>
                <td>Sub-Total</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <script src="js/popup.js"></script>
      </body>
    </div>
  );
};