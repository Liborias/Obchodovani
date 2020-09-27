import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const Homepage = () => (
  <>

    <h2>Homepage</h2>
    <Button color="primary">Hello World</Button>
    <table>
      <ul>
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

      </ul>
    </table>
  </>
);

export default Homepage;
