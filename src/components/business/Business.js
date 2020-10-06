import React from "react";
import DataTable from "../tables/Position";
import Homepage from "./homepage/Homepage"

const Business = () => (
  <>

    <h1>Historie obchodů</h1>
    <DataTable rows={Homepage.dataRows} />
  </>
);

export default Business;
