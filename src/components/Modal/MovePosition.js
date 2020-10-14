import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import "./Modals.css";


export default function MovePosition(props) {

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
    freeRideLabel: "NE"
  };


  const [newRow, setNewRow] = useState(props.editedRows || defaultRow);


  const validateTransaction = () => {

    const { longevity } = newRow;
    setTransactionValidity(true);
    if (!longevity?.length) {
      setTransactionValidity(false);
    };

  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { validateTransaction() }, [newRow]);

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="formDialogTitle">Přesunout pozici</DialogTitle>
        <DialogContent>

          <div className="tradeSelectors">
            <div className="particularSelector">

              <InputLabel id="longevityLabel">Pozice</InputLabel>
              <Select
                labelId="longevityLabel"
                id="longevitySelect"
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
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" disabled={!isTransactionValid} onClick={() => {
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