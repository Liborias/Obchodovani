import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function NewCompanyModal(props) {

  const [newCompanyRow, setCompanyNewRow] = React.useState(
    {
      id: Math.round(Math.random() * 1000000000),
      companyName: '',
      ticker: ''
    }
  );

  const [isTickerValid, setTickerValidity] = useState(false);

  const [isCompanyValid, setCompanyValidity] = useState(false);



  const validateTicker = (ticker) => {
    setTickerValidity(true);
    if (!ticker.includes("")) {
      setTickerValidity(false);
    }
  };

  const validateCompany = (company) => {
    setCompanyValidity(true);
    if (!company.includes("")) {
      setCompanyValidity(false);
    }
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleNewCompClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nová společnost</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="newTicker"
            label="Zkratka společnosti"
            type="text"
            fullWidth
            onChange={(e) => {
              setCompanyNewRow({ ...newCompanyRow, ticker: e.target.value });
              validateTicker(e.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="companyName"
            label="Název společnosti"
            type="text"
            fullWidth
            onChange={(e) => {
              setCompanyNewRow({ ...newCompanyRow, companyName: e.target.value });
              validateCompany(e.target.value)
            }}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleNewCompClose} color="primary">
            Cancel
          </Button>
          <Button disabled={!isTickerValid || !isCompanyValid} onClick={() => props.newCompanySave(newCompanyRow)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}