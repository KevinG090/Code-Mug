import React from 'react';

function TablaVentas(){
return (

    <section class="section-ventas">
    <table class="ventas">
      <thead>
        <tr>
          <th scope="row">No°</th>
          <th>Fecha</th>
          <th>Vendedor</th>
          <th>Total Factura</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tr>
        <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td> <td>Actions</td> <td><a href="#">Editar</a></td>
      </tr>
      <tr>
        <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td> <td>Actions</td> <td><a href="#">Editar</a></td>
      </tr>
      <tr>
        <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td> <td>Actions</td> <td><a href="#">Editar</a></td>
      </tr>
      <tr>
        <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td> <td>Actions</td> <td><a href="#">Editar</a></td>
      </tr>
      <tr>
        <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td> <td>Actions</td> <td><a href="#">Editar</a></td>
      </tr>
      
      <tfoot class="alinear">
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Total</td>
          <td>Sub-Total</td>
        </tr>
      </tfoot>
    </table>
  
  </section>
)

}
export default TablaVentas;