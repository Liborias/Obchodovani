import React from 'react';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
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
                onSelectionChange={(param) => { setEditedRow(param?.rows); }}
            />

        </div>
    );
}
