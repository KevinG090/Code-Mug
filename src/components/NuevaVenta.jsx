import React from "react";

export const NuevaVenta = () => {
  return (
    <div>
      <div>
        <body className="ventas">
          <div className="info">
            <div className="titulo-contenedor">
              <h1>NUEVA VENTA</h1>
              <button id="open" className="boton-venta button-g">
                Guardar
              </button>

              <div id="contenedorpopup" className="contenedor-pop">
                <div className="popup">
                  <h1>
                    Venta Agregada{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-checks"
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
                  <button className="boton-ver-ventas">Ver Ventas</button>
                  <button className="boton-nueva-venta">Nueva Venta</button>
                  {/* <!-- boton X eliminado --> */}
                  {/* <!-- <button id="cerrar" className="cerrar-pop-venta"> 
                X
              </button> --> */}
                </div>
              </div>
            </div>
          </div>
        </body>
        <script src="js/popup.js"></script>
      </div>
    </div>
  );
};

export default NuevaVenta;
