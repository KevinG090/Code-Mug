import popup from "js/popup";
import React from "react";
import Header from "../components/Header";
import Paginador from "../components/Paginador";

export const NuevaVenta = () => {
  return (
    <div>
      <Header />
      <div>
        <body className="ventas">
          <div className="info">
            <div className="titulo-contenedor">
              <h1>NUEVA VENTA</h1>
              <button
                onClick={popup}
                id="open"
                className="boton-venta button-g"
              >
                Guardar
              </button>
              <div>
                <div>
                  <form cellspacing="6">
                    <div className="controls">
                      <label>
                        <span>Cliente</span>
                        <input className="estilizar" type="text" />
                      </label>
                      <label>
                        <span>Direccion</span>
                        <input className="estilizar" type="text" />
                      </label>
                      <label>
                        <span>Contacto</span>
                        <input className="estilizar" type="text" />
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <section className="section-ventas">
                <table className="ventas">
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
                  <tfoot className="alinear">
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Total:</td>
                      <td>Sub-Total</td>
                    </tr>
                  </tfoot>
                </table>
              </section>
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
                  <button id="cerrar" className="cerrar-pop-venta"></button>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
      <script src="js/popup.js"></script>
      <Paginador />
    </div>
  );
};

export default NuevaVenta;