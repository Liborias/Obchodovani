import React, { useState } from "react";
import DataTable from "../tables/Position";
import Button from '@material-ui/core/Button';
import AddTransactionModal from "../Modal/AddTransactionModal";
import NewCompanyModal from "../Modal/NewCompanyModal";
import "./Homepage.css"

const rows = [
  {
    id: 1,
    companyName: 'First Majestic Silver Corp.',
    shortcut: 'AG',
    amount: 35,
    stockPrice: 13.15,
    buyDate: "30.7.2019",
    longevity: "Plovoucí krátkodobá"
  },
];

const defaultCompanies = [
  {
    ticker: 'AG',
    companyName: 'First Majestic Silver Corp.'
  }
];
const Homepage = (props) => {

  return (
    <>
      <div className="homePageContent">
        <h2>Aktuální portfolio</h2>
        <Button color="primary" onClick={props.handleClickOpen}>Nový obchod</Button>
        <h3>Pevné pozice</h3>

        {props.open && <AddTransactionModal
          open={props.open}
          handleClose={props.handleClose}
          handleSave={props.handleSave}
          handleNewCompOpen={props.handleNewCompOpen}
          companies={props.companies}
        />}
        <NewCompanyModal
          open={props.openNewCompany}
          handleNewCompClose={props.handleNewCompClose}
          newCompanySave={props.newCompanySave}
          companies={props.companies}
        />
        <DataTable rows={props.dataRows.filter(position => position.longevity !== "Plovoucí krátkodobá")} />
        <h3>Plovoucí pozice</h3>
        <DataTable rows={props.dataRows.filter(position => position.longevity === "Plovoucí krátkodobá")} />
      </div>
    </>
  );

};
export default Homepage;


