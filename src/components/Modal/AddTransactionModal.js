import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import NewCompanyModal from "../Modal/NewCompanyModal";
import "./Modals.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';



export default function AddTransactionModal(props) {

  const [isTransactionValid, setTransactionValidity] = useState(false);
  const defaultRow = {
    id: Math.round(Math.random() * 1000000000),
    companyName: "",
    shortcut: "",
    amount: 0,
    stockPrice: 0,
    sellPrice: 0,
    buyDate: "",
    longevity: "",
    freeRide: false,
    freeRideLabel: "NE",
    note: "",
    isSold: false,
    soldDate: "",
    vendorsChargeBuy: 0,
    vendorsChargeSell: 0

  };

  const [newRow, setNewRow] = useState(props.initialNewRow || defaultRow);
  const [secondRow, setSecondRow] = useState(newRow);
  const [editOption, setEditOption] = useState(props.option);
  const wholeBuyPrice = (props.initialNewRow?.stockPrice * props.initialNewRow?.amount) + props.initialNewRow?.vendorsChargeBuy;
  const wholeSellPrice = (secondRow.amount * secondRow.sellPrice) - props.initialNewRow?.vendorsChargeSell;

  console.log(wholeBuyPrice); console.log(wholeSellPrice);


  const validateTransaction = () => {

    const { companyName, shortcut, amount, stockPrice, buyDate, longevity } = newRow;
    setTransactionValidity(true);
    if (!companyName?.length || !shortcut?.length || !buyDate?.length || !longevity?.length || amount === "" || amount <= 0 || stockPrice === "" || stockPrice <= 0) {

      setTransactionValidity(false);
    };

  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { validateTransaction() }, [newRow]);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();


  const [radiButtonValue, setRadiButtonValue] = useState(editOption);

  const changeRadiobutton = (event) => setRadiButtonValue(event.target.value);

  const handleChange = (event) => {
    const freeRideLabel = event.target.checked ? "ANO" : "NE";
    setNewRow({ ...newRow, [event.target.name]: event.target.checked, freeRideLabel: freeRideLabel });
  };

  const handleSecondRow = (event) => {
    const freeRideLabel = event.target.checked ? "ANO" : "NE";
    setSecondRow({ ...secondRow, [event.target.name]: event.target.checked, freeRideLabel: freeRideLabel });
  };

  const setFreerideLabel = () => {
    newRow.freeRide ? setNewRow({ ...newRow, freeRideLabel: "ANO" }) : setNewRow({ ...newRow, freeRideLabel: "NE" });
  };

  const compareFreeride = () => {
    console.log("compareFree ride", wholeSellPrice, wholeBuyPrice);
    if (wholeSellPrice >= wholeBuyPrice && secondRow.isSold === true) {

      setNewRow({ ...newRow, freeRide: true });
      console.log("if true", { ...newRow, freeRide: true });
    } else {
      console.log("if false", { ...newRow, freeRide: false });
      setNewRow({ ...newRow, freeRide: false });
    }
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="formDialogTitle">
          {/* Použij swicth (struktura js podobně jako if-else - use google) */}
          {
            editOption === "new" ?
              "Nová pozice" :
              editOption === "split" ?
                "Rozdělení pozice" :
                editOption === "edit" ?
                  "Editace pozice" :
                  editOption === "move" ?
                    "Přesun pozice" :
                    "Prodej pozice"
          }</DialogTitle>
        <DialogContent>

          <div className="radioButtons">
            <FormControl component="fieldset">
              <RadioGroup aria-label="whatToDo" name="whatToDo1" value={radiButtonValue} row onChange={changeRadiobutton}>
                <FormControlLabel
                  value="new"
                  label="Nová pozice"
                  control={<Radio
                    color="primary"
                    onChange={(e) => { setEditOption(e.target.value); setNewRow(defaultRow); setSecondRow(defaultRow) }}
                  />}
                />
                <FormControlLabel
                  value="sell"
                  disabled={editOption === "new" && props.option === "new"}
                  label="Prodat"
                  control={<Radio
                    color="primary"
                    onChange={(e) => { setEditOption(e.target.value); setNewRow(props.initialNewRow) }}
                  />}
                />
                <FormControlLabel
                  value="split"
                  disabled={editOption === "new" && props.option === "new"}
                  label="Rozdělit"
                  control={<Radio
                    color="primary"
                    onChange={(e) => { setEditOption(e.target.value); setNewRow(props.initialNewRow) }}
                  />}
                />
                <FormControlLabel
                  value="edit"
                  disabled={editOption === "new" && props.option === "new"}
                  label="Editovat"
                  control={<Radio
                    color="primary"
                    onChange={(e) => { setEditOption(e.target.value); setNewRow(props.initialNewRow); setSecondRow(defaultRow) }}
                  />}
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="tradeSelectors" >
            <div className="particularSelector">
              <InputLabel id="tickerLabel">Zkratka společnosti</InputLabel>
              <Select
                labelId="tickerLabel"
                id="ticker"
                disabled={editOption === "sell" || editOption === "split"}
                value={newRow.shortcut}
                onChange={(e) => {
                  const ticker = e.target.value;
                  const selectedCompany = props.companies.find((company) => ticker === company.ticker)

                  setNewRow({ ...newRow, shortcut: ticker, companyName: selectedCompany?.companyName });
                }}
              >{props.companies.map((company) => {
                return <MenuItem key={company.ticker} value={company.ticker}>{company.ticker}</MenuItem>
              })}

                <Button onClick={props.handleNewCompOpen} color="primary">
                  Přidat společnost
          </Button>
              </Select>
            </div>
            <div>
              <InputLabel id="longevityLabel">Pozice</InputLabel>
              <Select
                labelId="longevityLabel"
                className="longevitySelect"
                value={newRow.longevity}
                disabled={editOption === "sell" || editOption === "split"}
                onChange={(e) => {
                  setNewRow({ ...newRow, longevity: e.target.value });
                }}
              >
                <MenuItem key="plovouci_pozice" value={"Plovoucí krátkodobá"}>Plovoucí krátkodobá</MenuItem>
                <MenuItem key="strednedoba_pozice" value={"Pevná střednědobá"}>Pevná střednědobá</MenuItem>
                <MenuItem key="dlouhodoba_pozice" value={"Pevná dlouhodobá"}>Pevná dlouhodobá</MenuItem>


              </Select>

            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={newRow.freeRide}
                  onChange={handleChange}
                  name="freeRide"
                  color="primary"
                  disabled={editOption === "new"}
                />
              }
              label="Free ride"
              labelPlacement="top"
            />

          </div>

          <TextField
            margin="dense"
            className="companyName"
            label="Název společnosti"
            disabled
            value={newRow.companyName}
            type="text"
            fullWidth
            onChange={(e) => setNewRow({ ...newRow, companyName: e.target.value })}
          />
          <div className="datesAndNewPosition">
            <div className="editPosition">

              <div className="datePriceAmountColumn">
                <div className="Date">
                  <TextField
                    label="Datum nákupu"
                    disabled={editOption === "sell" || editOption === "split"}
                    type="date"
                    value={newRow.buyDate}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => setNewRow({ ...newRow, buyDate: e.target.value })}
                  />
                </div>

                <div className="amountAndPrice">
                  <div className="amount">
                    <TextField
                      margin="dense"
                      label="Množství akcií"
                      disabled={editOption === "sell" || editOption === "split"}
                      value={newRow.amount}
                      type="number"
                      fullWidth
                      onChange={(e) => {
                        setNewRow({ ...newRow, amount: e.target.value });
                      }}
                    />
                  </div>

                  <div className="price">
                    <TextField
                      margin="dense"
                      className="price"
                      label="Cena za kus"
                      disabled={editOption === "sell" || editOption === "split"}
                      value={newRow.stockPrice}
                      type="number"
                      fullWidth
                      onChange={(e) => {
                        setNewRow({ ...newRow, stockPrice: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="dateAndPrice">

                {
                  editOption !== "split"
                    ?
                    <div className="Date">
                      <TextField
                        label="Datum prodeje"
                        type="date"
                        disabled={editOption === "new" || editOption === "split"}
                        value={newRow.soldDate}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => setSecondRow({ ...secondRow, soldDate: e.target.value })}
                      />
                    </div>
                    :
                    <div id="longevitySplit">
                      <InputLabel id="longevityLabel">Nová pozice</InputLabel>
                      <Select
                        labelId="longevityLabel"
                        className="longevitySelect"
                        value={secondRow.longevity}
                        onChange={(e) => {
                          setSecondRow({ ...secondRow, longevity: e.target.value });
                        }}
                      >
                        <MenuItem key="plovouci_pozice" value={"Plovoucí krátkodobá"}>Plovoucí krátkodobá</MenuItem>
                        <MenuItem key="strednedoba_pozice" value={"Pevná střednědobá"}>Pevná střednědobá</MenuItem>
                        <MenuItem key="dlouhodoba_pozice" value={"Pevná dlouhodobá"}>Pevná dlouhodobá</MenuItem>


                      </Select>
                    </div>
                }

                <div className="amount">
                  <TextField
                    margin="dense"
                    label={editOption === "split" ? "Přesunout akcií" : "Prodaných akcií"}
                    disabled={editOption === "new"}
                    type="number"
                    defaultValue={editOption !== "new" ? (props.initialNewRow?.amount - newRow.amount) : secondRow.amount}
                    //value={editOption !== "new" ? (props.initialNewRow.amount - newRow.amount) : secondRow.amount}
                    min={0}
                    max={editOption !== "new" ? props.initialNewRow.amount : 0}
                    fullWidth
                    onChange={(e) => {

                      setSecondRow({ ...secondRow, amount: e.target.value });
                      setNewRow({ ...newRow, amount: (props.initialNewRow?.amount - e.target.value) });
                      compareFreeride();
                      //XJB todo

                    }}
                  />
                </div>

                {
                  editOption === "split"
                    ?
                    <div className="freeRideSplit">
                      <FormControlLabel
                        control={
                          <Switch
                            checked={secondRow.freeRide}
                            onChange={handleSecondRow}
                            name="freeRide"
                            color="primary"
                          />
                        }
                        label="Free ride"
                      />
                    </div>
                    :
                    <div className="price">
                      <TextField
                        margin="dense"
                        className="price"
                        label="Prodejní cena"
                        disabled={editOption !== "sell"}
                        defaultValue={0}
                        type="number"
                        fullWidth
                        onChange={(e) => {
                          setSecondRow({ ...secondRow, sellPrice: e.target.value });
                          compareFreeride();
                          console.log(wholeBuyPrice); console.log(wholeSellPrice);

                        }}
                      />
                    </div>

                }

              </div>

            </div>
          </div>

          <div className="noteFieldWraper">



            <div>
              <InputLabel id="noteLabel">Poznámka:</InputLabel>
              <textarea
                className="noteField"
                type="text"
                name="textValue"
                value={newRow.note}
                rows={4}
                maxLength="250"
                onChange={(e) => {
                  setNewRow({ ...newRow, note: e.target.value });
                }}
              />
            </div>
          </div>

        </DialogContent>
        <NewCompanyModal
          open={props.openNewCompany}
          handleNewCompClose={props.handleNewCompClose}
          newCompanySave={(newAddedCompany) => {
            props.newCompanySave(newAddedCompany);
            setNewRow({ ...newRow, companyName: newAddedCompany.companyName, shortcut: newAddedCompany.ticker });
          }
          }
          companies={props.companies}
        />
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Zavřít
          </Button>
          <Button type="submit" disabled={!isTransactionValid} onClick={() => {
            setFreerideLabel();
            props.handleSave(newRow);
            props.handleClose();
          }
          }
            color="primary">
            Uložit
          </Button>
        </DialogActions>
      </Dialog>

    </div >

  );

}

