import React from "react";
import DataTable from "../tables/SolidPosition";
import Button from '@material-ui/core/Button';
import AdTransactionModal from "../Modal/AdTransactionModal"


const Homepage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log("makám na tom");
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
        <DataTable />
      </div>
    </>
  );



};

export default Homepage;
