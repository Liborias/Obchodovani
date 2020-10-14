import React from 'react';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import AddTransactionModal from "../Modal/AddTransactionModal";
import EditPosition from "../Modal/EditPosition"
import "./Position.css"

export default function DataTable(props) {

    const [editedRow, setEditedRow] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [openEditPosition, setOpenEditPosition] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleCloseEditPosition = () => {
        setOpenEditPosition(false);
    }

    return (

        <div className="companyTable">
            <div>
                {
                    editedRow?.length > 1 ?
                        <Button color="primary" onClick={() => setOpenEditPosition(true)}>Přesunout</Button> :
                        <Button color="primary" disabled={editedRow.length === 0} onClick={() => setOpen(true)}>Upravit</Button>
                }
            </div>

            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSize={5}
                checkboxSelection
                //onRowSelected={(param) => { setEditedRow(param); console.log(editedRow); }}
                onSelectionChange={(param) => setEditedRow(param?.rows)}
            />
            {open && <AddTransactionModal
                open={open}
                handleClose={handleClose}
                handleSave={props.handleSave}
                handleNewCompOpen={props.handleNewCompOpen}
                companies={props.companies}
                company={props.company}
                openNewCompany={props.openNewCompany}
                handleNewCompClose={props.handleNewCompClose}
                newCompanySave={props.newCompanySave}
                initialNewRow={editedRow.length === 1 ? editedRow[0] : undefined}
            />}
            {openEditPosition && <EditPosition
                open={openEditPosition}
                handleClose={handleCloseEditPosition}
                handleSave={props.handleSave}
                initialNewRow={editedRow}
            />}
        </div>
    );
}
