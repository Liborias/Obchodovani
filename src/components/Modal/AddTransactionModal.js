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
    amount: "",
    stockPrice: "",
    buyDate: "",
    longevity: "",
    freeRide: false,
    freeRideLabel: "NE",
    note: ""
  };


  const [newRow, setNewRow] = useState(props.initialNewRow || defaultRow);


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


  const [radiButtonValue, setRadiButtonValue] = React.useState("edit");

  const changeRadiobutton = (event) => setRadiButtonValue(event.target.value);

  const handleChange = (event) => {
    const freeRideLabel = event.target.checked ? "ANO" : "NE";
    setNewRow({ ...newRow, [event.target.name]: event.target.checked, freeRideLabel: freeRideLabel });
  };

  const setFreerideLabel = () => {
    newRow.freeRide ? setNewRow({ ...newRow, freeRideLabel: "ANO" }) : setNewRow({ ...newRow, freeRideLabel: "NE" });
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="formDialogTitle">Transakce</DialogTitle>
        <DialogContent>

          {newRow.id > 0 ? <div className="radioButtons">
            <FormControl component="fieldset">
              <RadioGroup aria-label="whatToDo" name="whatToDo1" value={radiButtonValue} row onChange={changeRadiobutton}>
                <FormControlLabel value="sell" control={<Radio />} label="Prodat" control={<Radio color="primary" onChange={() => { }} />} />
                <FormControlLabel value="split" control={<Radio />} label="Rozdělit" control={<Radio color="primary" onChange={() => { }} />} />
                <FormControlLabel value="edit" control={<Radio />} label="Editovat" control={<Radio color="primary" onChange={() => { }} />} />
              </RadioGroup>
            </FormControl>
          </div> : <div className="radioButtons"></div>}

          <div className="tradeSelectors">
            <div className="particularSelector">
              <InputLabel id="tickerLabel">Zkratka společnosti</InputLabel>
              <Select
                labelId="tickerLabel"
                id="ticker"
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
          <div className="buyDate">
            <TextField
              label="Datum transakce"
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
                value={newRow.stockPrice}
                type="number"
                fullWidth
                onChange={(e) => {
                  setNewRow({ ...newRow, stockPrice: e.target.value });
                }}
              />
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