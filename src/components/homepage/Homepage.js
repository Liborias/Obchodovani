import React from "react";
import DataTable from "../tables/SolidPosition";
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
    buyDate: "30.7.2019"
  },
];

const defaultCompanies = [
  {
    ticker: 'AG',
    companyName: 'First Majestic Silver Corp.'
  }
];
const Homepage = () => {
  const [open, setOpen] = React.useState(false);
  const [openNewCompany, setOpenNewCompany] = React.useState(false);
  const [dataRows, setDataRows] = React.useState(rows);
  const [companies, setCompany] = React.useState(defaultCompanies);



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
    setDataRows([...rows, newRow]);
    setOpen(false);
  };

  const newCompanySave = (newCompanyRow) => {
    setCompany([...defaultCompanies, newCompanyRow]);
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
