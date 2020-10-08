import React from "react";
import DataTable from "../tables/Position";
import { columns } from "../tables/dataPositions";



const Trading = (props) => (

  <>

    <h2>Historie obchodů</h2>
    <DataTable columns={columns} rows={props.dataRows} />
  </>
);

export default Trading;
