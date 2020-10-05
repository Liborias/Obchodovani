import React, { useState } from "react";
import DataTable from "../tables/Position";
import Button from '@material-ui/core/Button';
import AddTransactionModal from "../Modal/AddTransactionModal";
import NewCompanyModal from "../Modal/NewCompanyModal";

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
const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [openNewCompany, setOpenNewCompany] = useState(false);
  const [dataRows, setDataRows] = useState(rows);
  const [companies, setCompany] = useState(defaultCompanies);
  const [longevity, setLongevity] = useState("Plovoucí krátkodobá");



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewCompOpen = () => {
    setOpenNewCompany(true);
  };

  const handleNewCompClose = () => {
    setOpenNewCompany(false);
  };

  const handleSave = (newRow) => {
    setDataRows([...dataRows, newRow]);
    setOpen(false);
  };

  const newCompanySave = (newCompanyRow) => {
    setCompany([...companies, newCompanyRow]);
    setOpenNewCompany(false);
  };



  return (
    <>
      <div className="homePageContent">
        <h2>Aktuální portfolio</h2>
        <Button color="primary" onClick={handleClickOpen}>Nový obchod</Button>
        {open && <AddTransactionModal
          open={open}
          handleClose={handleClose}
          handleSave={handleSave}
          handleNewCompOpen={handleNewCompOpen}
          companies={companies}
        />}
        <Button color="primary" onClick={handleNewCompOpen}>Nová společnost</Button>
        <NewCompanyModal
          open={openNewCompany}
          handleNewCompClose={handleNewCompClose}
          newCompanySave={newCompanySave}
          companies={companies}
        />
        <DataTable rows={dataRows} />
      </div>
    </>
  );



};

export default Homepage;
