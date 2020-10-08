import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import "./Position.css"

export default function DataTable(props) {
    return (
        <div className="companyTable">
            <DataGrid rows={props.rows} columns={props.columns} pageSize={5} checkboxSelection />
        </div>
    );
}
