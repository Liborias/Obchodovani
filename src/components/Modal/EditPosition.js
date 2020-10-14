import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import "./Modals.css";



export default function EditPosition(props) {


  const [selected, setSelected] = useState([props.initialNewRow]);



  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="formDialogTitle">Změna pozice</DialogTitle>
        <DialogContent>

          <div className="tradeSelectors">
            <InputLabel id="longevityLabel">Pozice</InputLabel>
            <Select
              labelId="longevityLabel"
              id="longevitySelect"
              value={selected.longevity}
              onChange={(e) => {
                setSelected({ ...selected, longevity: e.target.value });
              }}
            >
              <MenuItem key="plovouci_pozice" value={"Plovoucí krátkodobá"}>Plovoucí krátkodobá</MenuItem>
              <MenuItem key="strednedoba_pozice" value={"Pevná střednědobá"}>Pevná střednědobá</MenuItem>
              <MenuItem key="dlouhodoba_pozice" value={"Pevná dlouhodobá"}>Pevná dlouhodobá</MenuItem>


            </Select>

          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={() => {
            props.handleSave(selected);
            props.handleClose();
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