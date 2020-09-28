import React from "react";
import { Button } from '@material-ui/core';
import DataTable from "../tables/SolidPosition";



const Homepage = () => (
  <>

    <h2>Homepage</h2>
    <Button color="primary">Hello World</Button>
    <DataTable />

    <table>
      <tr>
        <th className="stock">
          Akcie
        </th>
        <th className="stockAmount">
          Množství
        </th>
        <th className="stockPrice">
          Cena za kus
        </th>
        <th className="buyDate">
          Datum nákupu
        </th>
      </tr>

    </table>


  </>




);

export default Homepage;
