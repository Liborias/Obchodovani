import React from "react";
import { Button } from '@material-ui/core';
import DataTable from "../tables/SolidPosition";



const Homepage = () => (
  <>
    <div className="homePageContent">
      <h2>Aktuální portfolio</h2>
      <Button color="primary">Hello World</Button>
      <DataTable />
    </div>
  </>




);

export default Homepage;
