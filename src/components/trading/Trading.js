import React from "react";
import DataTable from "../tables/Position";



const Trading = (props) => (

  <>

    <h1>Historie obchodů</h1>
    <DataTable rows={props.dataRows} />
  </>
);

export default Trading;
