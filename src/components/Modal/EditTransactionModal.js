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
import NewCompanyModal from "./NewCompanyModal";
import "./Modals.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';



export default function EditTransactionModal(props) {

  const [isTransactionValid, setTransactionValidity] = useState(false);

  const [newRow, setNewRow] = useState(
    {
      id: Math.round(Math.random() * 1000000000),
      companyName: "",
      shortcut: "",
      amount: 0,
      stockPrice: 0,
      buyDate: new Date(),
      longevity: "",
      freeRide: false,
      freeRideLabel: "NE"
    }
  );


  const validateTransaction = () => {

    const { companyName, shortcut, amount, stockPrice, buyDate, longevity } = newRow;
    setTransactionValidity(true);
    if (!companyName?.length || !shortcut?.length || !buyDate?.length || !longevity?.length || amount <= 0 || stockPrice <= 0) {

      setTransactionValidity(false);
    };

  };

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



  const handleChange = (event) => {
    const freeRideLabel = event.target.checked ? "ANO" : "NE";
    setNewRow({ ...newRow, [event.target.name]: event.target.checked, freeRideLabel: freeRideLabel });
  };

  const onClickAct = () => {
    newRow.freeRide ? setNewRow({ ...newRow, freeRideLabel: "ANO" }) : setNewRow({ ...newRow, freeRideLabel: "NE" });
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="formDialogTitle">Nový obchod</DialogTitle>
        <DialogContent>

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
                return < MenuItem value={company.ticker}>{company.ticker}</MenuItem>
              })}

                <Button onClick={props.handleNewCompOpen} color="primary">
                  Add Company
          </Button>
              </Select>
            </div>
            <div>
              <InputLabel id="longevityLabel">Pozice</InputLabel>
              <Select
                labelId="longevityLabel"
                id="longevitySelect"
                value={newRow.longevity}
                onChange={(e) => {
                  setNewRow({ ...newRow, longevity: e.target.value });
                }
                }
              >
                <MenuItem value={"Plovoucí krátkodobá"}>Plovoucí krátkodobá</MenuItem>
                <MenuItem value={"Pevná střednědobá"}>Pevná střednědobá</MenuItem>
                <MenuItem value={"Pevná dlouhodobá"}>Pevná dlouhodobá</MenuItem>


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
            autoFocus
            id="date"
            label="Datum transakce"
            type="date"
            value={newRow.buyDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setNewRow({ ...newRow, buyDate: e.target.value })}
          />


          <TextField
            autoFocus
            margin="dense"
            id="companyName"
            label="Název společnosti"
            disabled
            value={newRow.companyName}
            type="text"
            fullWidth
            onChange={(e) => setNewRow({ ...newRow, companyName: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label="Množství akcií"
            value={newRow.amount}
            type="number"
            fullWidth
            onChange={(e) => {
              setNewRow({ ...newRow, amount: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Cena 1. akcie"
            value={newRow.stockPrice}
            type="number"
            fullWidth
            onChange={(e) => {
              setNewRow({ ...newRow, stockPrice: e.target.value });
            }}
          />
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
            Cancel
          </Button>
          <Button type="submit" disabled={!isTransactionValid} onClick={() => {
            onClickAct();
            props.handleSave(newRow);
          }
          }
            color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}