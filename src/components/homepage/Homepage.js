import React from "react";
import DataTable from "../tables/SolidPosition";
import Button from '@material-ui/core/Button';
import AdTransactionModal from "../Modal/AdTransactionModal"


const Homepage = () => (
  <>
    <div className="homePageContent">
      <h2>Aktuální portfolio</h2>
      <Button color="primary">Hello World</Button>
      <AdTransactionModal />
      <DataTable />
    </div>
  </>




);

export default Homepage;
