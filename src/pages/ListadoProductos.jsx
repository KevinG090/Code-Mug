import Header from "components/Header";
import Paginador from "components/Paginador";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";
// import { obtenerProductos } from "../utils/api";


const ListadoProductos = () => {

  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const [listaProductos, setListaProductos] = useState([]);

  const url = "http://localhost:3030/productos"

  useEffect(()=>{
    if (!user) {
      return history.replace("/");
    }
    user.getIdToken(true).then(token => {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const fetchData = async () =>{
        await fetch(`${url}`, requestOptions)
        .then(response => response.json())
        .then(json => setListaProductos(json))
        .catch(error => console.log(error))
      }
      fetchData()
    });
  }, []);

  return (
    <div>
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
                {listaProductos.map((dato, id)=>(
                <tr key={dato._id}>
                  <td> {id + 1} </td>
                  <td>{dato.nombre}</td>
                  <td>{dato.precio}</td>
                  <td>acciones</td>
                </tr>
                ))}
            </tbody>
            {console.log(listaProductos)}

            <tfoot className="alinear"></tfoot>
          </table>
        </section>
        {/* <!-- Estados de las ventas: -->
  <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}

        <script src="js/popup.js"></script>
      </body>
      <Paginador />
    </div>

    // useEffect(() => {
    //   fetch(obtenerProductos())
    //     .then((response) => response.json())
    //     .then((datos) => {
    //       setListaProductos(datos);
    //     });
    // }, []);

    // return listaProductos;

    // const [mostrarTabla, setMostrarTabla] = useState(true);
    // const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    // const [loading, setLoading] = useState(false);
    // const [ListProductos, setListProductos] = useState([]);

    // useEffect(() => {
    //   const fetchProductos = async () => {
    //     setLoading(true);
    //     await obtenerProductos(
    //       (response) => {
    //         console.log("la respuesta que se recibio fue", response);
    //         setListProductos(response.data);
    //         setEjecutarConsulta(false);
    //         setLoading(false);
    //       },
    //       (error) => {
    //         console.error("Salio un error:", error);
    //         setLoading(false);
    //       }
    //     );
    //   };
    //   console.log("consulta", ejecutarConsulta);
    //   if (ejecutarConsulta) {
    //     fetchProductos();
    //   }
    // }, [ejecutarConsulta]);

    // useEffect(() => {
    //   //obtener lista de vehículos desde el backend
    //   if (mostrarTabla) {
    //     setEjecutarConsulta(true);
    //   }
    // }, [mostrarTabla]);

    // useEffect(() => {
    //   if (mostrarTabla) {
    //     setTextoBoton('Crear Nuevo Vehículo');
    //     setColorBoton('indigo');
    //   } else {
    //     setTextoBoton('Mostrar Todos los vehículos');
    //     setColorBoton('green');
    //   }
    // }, [mostrarTabla]);

    // // class s
    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     data: [],
    //     form: {
    //       _id: "",
    //       nombre: "",
    //       precio: "",
    //     },
    //     mostrarCargando: false,
    //   };
    // }

    // componentDidMount() {
    //   this.cargarProductos();
    // }

    // mostrarModalActualizar = (dato) => {
    //   this.setState({ modalActualizar: true, form: dato });
    // };

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
  );
};
export default ListadoProductos;
