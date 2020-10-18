import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import AddTransactionModal from "../Modal/AddTransactionModal";
import MovePosition from "../Modal/MovePosition"
import "./Position.css"

export default function DataTable(props) {

    const [editedRow, setEditedRow] = useState([]);
    const [open, setOpen] = useState(false);
    const [openMovePosition, setMovePosition] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleCloseMovePosition = () => {
        setMovePosition(false);
    }

    return (

        <div className="companyTable">
            <div>
                {
                    editedRow?.length > 1 ?
                        <Button color="primary" onClick={() => setMovePosition(true)}>Přesunout</Button> :
                        editedRow?.length < 1 ?
                            <Button color="primary" onClick={() => setOpen(true)}>Nová pozice</Button> :
                            <Button color="primary" onClick={() => setOpen(true)}>Upravit</Button>
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
                longevity={props.longevity}
                initialNewRow={editedRow.length === 1 ? editedRow[0] : undefined}
                option={editedRow?.length > 1 ? "move" : editedRow?.length < 1 ? "new" : "edit"}
            />}
            {openMovePosition && <MovePosition

                open={openMovePosition}
                handleClose={handleCloseMovePosition}
                move={props.move}
                selected={editedRow}
            />}
        </div>
    );
}
