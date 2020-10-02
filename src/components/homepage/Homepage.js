import React from "react";
import DataTable from "../tables/SolidPosition";
import Button from '@material-ui/core/Button';
import AdTransactionModal from "../Modal/AdTransactionModal"

const rows = [{ id: 1, companyName: 'First Majestic Silver Corp.', shortcut: 'AG', amount: 35, stockPrice: 13.15, buyDate: "30.7.2019" },

];
const Homepage = () => {
  const [open, setOpen] = React.useState(false);
  const [dataRows, setDataRows] = React.useState(rows);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (newRow) => {
    setDataRows([...rows, newRow]);
    setOpen(false);
  };



  return (
    <>
      <div className="homePageContent">
        <h2>Aktuální portfolio</h2>
        <Button color="primary" onClick={handleClickOpen}>Nový obchod</Button>
        <AdTransactionModal
          open={open}
          handleClose={handleClose}
          handleSave={handleSave}
        />
        <DataTable rows={dataRows} />
      </div>
    </>
  );



};

export default Homepage;
