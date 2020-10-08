import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Layout.css";
import Homepage from "../homepage/Homepage";
import Trading from "../trading/Trading";

/*
zadáním nové společnosti se rovnou vyplní políčka
přidat switcher pro free ride
přidat datum
nezobrazovat ID
*/

const rows = [
  {
    id: 1,
    companyName: 'First Majestic Silver Corp.',
    shortcut: 'AG',
    amount: 35,
    stockPrice: 13.15,
    buyDate: "30.7.2019",
    longevity: "Plovoucí krátkodobá",
    freeRide: false,
    freeRideLabel: "NE"
  },
];

const defaultCompanies = [
  {
    ticker: 'AG',
    companyName: 'First Majestic Silver Corp.'
  }
];


const Layout = () => {
  const [open, setOpen] = useState(false);
  const [openNewCompany, setOpenNewCompany] = useState(false);
  const [dataRows, setDataRows] = useState(rows);
  const [companies, setCompany] = useState(defaultCompanies);



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
    <Router>
      <div className="allContent">
        <div className="navigator">

          <nav>

            <Link to="/" className="linkStyle">Aktuální portfolio</Link>

            <Link to="/trading" className="linkStyle">Historie obchodů</Link>

          </nav>
        </div>

        <div className="content">
          <Switch>
            <Route path="/trading">
              <Trading
                dataRows={dataRows}
              />
            </Route>
            <Route path="/">
              <Homepage
                open={open}
                openNewCompany={openNewCompany}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                handleSave={handleSave}
                handleNewCompOpen={handleNewCompOpen}
                handleNewCompClose={handleNewCompClose}
                newCompanySave={newCompanySave}
                companies={companies}
                dataRows={dataRows}
              />
            </Route>
          </Switch>
        </div>
      </div></Router>
  );

};

export default Layout;
