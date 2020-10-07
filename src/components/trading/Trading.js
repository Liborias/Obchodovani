import React from "react";
import DataTable from "../tables/Position";



const Trading = (props) => (

  <>

    <h2>Historie obchodů</h2>
    <DataTable rows={props.dataRows} />
  </>
);

export default Trading;
