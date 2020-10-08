export const columns = [
    //{ field: 'id', headerName: 'ID', width: 70 },
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
    {
        field: 'longevity',
        headerName: 'Pozice',

        width: 200,
    },
    {
        field: 'freeRideLabel',
        headerName: 'Free Ride',

        width: 200,
    },

];