import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Layout.css";
import Homepage from "../homepage/Homepage";
import Trading from "../trading/Trading";


const rows = [
  {
    id: 1,
    companyName: 'First Majestic Silver Corp.',
    shortcut: 'AG',
    amount: 35,
    stockPrice: 13.15,
    sellPrice: "",
    buyDate: "30.7.2019",
    longevity: "Plovoucí krátkodobá",
    freeRide: false,
    freeRideLabel: "NE",
    note: "Zeptat se Jiřky: jak vyčistit input při přepnutí, jak omezit hodnoty na max a min, když tyto atributy nefungují, proč mi nefunguje rovnice na auto zapnutí freeRide, formát data",
    isSold: true,
    soldDate: "",
    vendorsChargeBuy: 10.5,
    vendorsChargeSell: 0
  },
  {
    id: 2,
    companyName: 'MAG Silver Corp.',
    shortcut: 'MAG',
    amount: 300,
    stockPrice: 12.50,
    sellPrice: "",
    buyDate: "30.7.2019",
    longevity: "Plovoucí krátkodobá",
    freeRide: false,
    freeRideLabel: "NE",
    note: "Zkušební transakce",
    isSold: false,
    soldDate: "",
    vendorsChargeBuy: 10.5,
    vendorsChargeSell: 0
  },
];



const defaultCompanies = [
  {
    ticker: 'AG',
    companyName: 'First Majestic Silver Corp.'
  },
  {
    ticker: 'MAG',
    companyName: 'MAG Silver Corp.'
  }
];


const Layout = () => {
  const [open, setOpen] = useState(false);
  const [openNewCompany, setOpenNewCompany] = useState(false);
  const [dataRows, setDataRows] = useState(rows);
  const [companies, setCompanies] = useState(defaultCompanies);

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

  // const handleSave = (newRow) => {
  //   setDataRows([...dataRows, newRow]);
  //   setOpen(false);
  // };

  const handleSave = (newRow) => {
    const hledaneID = dataRows.findIndex((element) => element.id === newRow.id);
    if (hledaneID !== -1) {
      const updated = dataRows?.map(item => item.id === newRow.id ? newRow : item);
      setDataRows(updated);
    } else {
      setDataRows([...dataRows, newRow]);
    }
  };


  const move = (selected, newPosition) => {
    const selectedIds = selected?.map((item) => item.id);
    const updatedPosition = dataRows?.map((item) => selectedIds.includes(item.id) ? { ...item, longevity: newPosition } : item);
    setDataRows(updatedPosition);
  };

  const newCompanySave = (newCompanyRow) => {
    setCompanies([...companies, newCompanyRow]);
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
                move={move}
              />

            </Route>
          </Switch>
        </div>
      </div></Router>
  );

};

export default Layout;
