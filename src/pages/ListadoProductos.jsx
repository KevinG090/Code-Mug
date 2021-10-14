import Header from "components/Header";
import Paginador from "components/Paginador";
import React, { useState, useEffect, Component } from "react";

const ListadoProductos = () => {

  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
   const [loading, setLoading] = useState(false);
   const [ListProductos, setListProductos] = useState([]);
  
  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      await obtenerProductos(
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          setListProductos(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error('Salio un error:', error);
          setLoading(false);
        }
      );
    };
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchProductos();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de vehículos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      form: {
        _id: "",
        nombre: "",
        precio: "",
      },
      mostrarCargando: false,
    };
  }

  componentDidMount() {
    this.cargarProductos();
  }

  mostrarModalActualizar = (dato) => {
    this.setState({ modalActualizar: true, form: dato });
  };

  // cargarProductos() {
  //   this.setState({ mostrarCargando: true });
  //   fetch(`${BASE_URL}${PATH_PRODUCTOS}`)
  //     .then((result) => result.json())
  //     .then(
  //       (result) => {
  //         this.setState({ data: result, mostrarCargando: false });
  //       },
  //       // Nota: es importante manejar errores aquí y no en
  //       // un bloque catch() para que no interceptemos errores
  //       // de errores reales en los componentes.
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  // const { data: productos } = componentDidMount;
    return (
      <>
        <Header />
        <body className="ventas">
          <div className="info">
            <div className="titulo-contenedor">
              <h1>LISTADO PRODUCTOS</h1>
              <button className="boton-venta button-g">
                <a className="a-visited" href="/NuevoProducto">
                  Nuevo Producto
                </a>
              </button>
            </div>

            <div className="contenedor-busqueda">
              <p className="text-buscar">Buscar:</p>
              <div className="select">
                <select>
                  <option value="" selected disabled>
                    Buscar por:
                  </option>
                  <option value="">Id</option>
                  <option value="">Descripcion</option>
                </select>
              </div>
              <input type="text" />
            </div>
          </div>

          <section className="section-ventas">
            <table className="ventas">
              <thead>
                <tr>
                  <th scope="row">Id °</th>
                  <th>Descripcion</th>
                  <th>Precio</th>
                  <th>Accion</th>
                </tr>
              </thead>

              <tbody>
                {this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>id</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.precio}</td>
                    <td>acciones</td>
                  </tr>
                ))}
              </tbody>
              {console.log(this.state)}

              <tfoot className="alinear"></tfoot>
            </table>
          </section>
          {/* <!-- Estados de las ventas: -->
  <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}

          <script src="js/popup.js"></script>
        </body>
        <Paginador />
      </>
    );
  }

export default ListadoProductos;
