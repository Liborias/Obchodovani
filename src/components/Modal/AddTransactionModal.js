import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import "./Modals.css";
import SwitchLabel from "../helpers/SwitchLabel";



export default function AddTransactionModal(props) {

  const [newRow, setNewRow] = React.useState(
    {
      id: Math.round(Math.random() * 1000000000),
      companyName: '',
      shortcut: '',
      amount: null,
      stockPrice: null,
      buyDate: "10.9.2020",
      longevity: "Plovoucí krátkodobá",
      freeRide: false
    }
  );

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
                onChange={(e) => {
                  const ticker = e.target.value;
                  const selectedCompany = props.companies.find((company) => ticker === company.ticker)


                  setNewRow({ ...newRow, shortcut: ticker, companyName: selectedCompany.companyName })
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
                onChange={(e) => setNewRow({ ...newRow, longevity: e.target.value })}
              >
                <MenuItem value={"Plovoucí krátkodobá"}>Plovoucí krátkodobá</MenuItem>
                <MenuItem value={"Pevná střednědobá"}>Pevná střednědobá</MenuItem>
                <MenuItem value={"Pevná dlouhodobá"}>Pevná dlouhodobá</MenuItem>


              </Select>

            </div>
            <SwitchLabel value="checkedA" switchLableName="Free ride"
              onChange={(e) => setNewRow({ ...newRow, freeRide: e.target.value })} />

          </div>
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
            type="number"
            fullWidth
            onChange={(e) => setNewRow({ ...newRow, amount: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Cena 1. akcie"
            type="number"
            fullWidth
            onChange={(e) => setNewRow({ ...newRow, stockPrice: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => props.handleSave(newRow)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}