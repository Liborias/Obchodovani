import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AdTransactionModal(props) {

  const [newRow, setNewRow] = React.useState(
    {
      id: Math.round(Math.random() * 1000000000),
      companyName: '',
      shortcut: '',
      amount: null,
      stockPrice: null,
      buyDate: "10.9.2020"
    }
  );



  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nový obchod</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vyplňte všechna pole formuláře.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="ticker"
            label="Zkratka společnosti (ticker)"
            type="text"
            fullWidth
            onChange={(e) => setNewRow({ ...newRow, shortcut: e.target.value })}

          />
          <TextField
            autoFocus
            margin="dense"
            id="companyName"
            label="Název společnosti"
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
    </div>
  );
}