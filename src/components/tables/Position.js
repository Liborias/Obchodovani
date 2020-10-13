import React from 'react';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import AddTransactionModal from "../Modal/AddTransactionModal";
import "./Position.css"

export default function DataTable(props) {

    const [editedRow, setEditedRow] = React.useState([]);

    return (

        <div className="companyTable">
            <div>
                {editedRow?.length > 1 ? <Button color="primary" onClick={props.handleClickOpen}>Přesunout</Button> : <Button color="primary" disabled={editedRow.length === 0} onClick={props.handleClickOpen}>Upravit</Button>}
            </div>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSize={5}
                checkboxSelection
                //onRowSelected={(param) => { setEditedRow(param); console.log(editedRow); }}
                onSelectionChange={(param) => {
                    setEditedRow(param?.rows);
                    console.log(param)
                }}
            />
            {props.open && <AddTransactionModal
                open={props.open}
                handleClose={props.handleClose}
                handleSave={props.handleSave}
                handleNewCompOpen={props.handleNewCompOpen}
                companies={props.companies}
                company={props.company}
                openNewCompany={props.openNewCompany}
                handleNewCompClose={props.handleNewCompClose}
                newCompanySave={props.newCompanySave}
                initialNewRow={editedRow}
            />}
        </div>
    );
}
