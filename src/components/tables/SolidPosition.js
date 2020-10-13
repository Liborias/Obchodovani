import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'shortcut', headerName: 'Zkratka', width: 100 },
    { field: 'companyName', headerName: 'Jméno společnosti', width: 300 },
    {
        field: 'amount',
        headerName: 'Množství',
        type: 'number',
        width: 100,
    },
    {
        field: 'stockPrice',
        headerName: 'Cena za kus $',
        type: 'number',
        width: 130,
    },
    {
        field: 'buyDate',
        headerName: 'Datum transakce',

        width: 200,
    },

];


export default function DataTable(props) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={props.rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}
