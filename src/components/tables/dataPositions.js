export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70,
        visible: false,
    },
    {
        field: 'shortcut',
        headerName: 'Zkratka',
        width: 100,
        visible: true,
    },
    {
        field: 'companyName',
        headerName: 'Jméno společnosti',
        width: 300,
        visible: true,
    },
    {
        field: 'amount',
        headerName: 'Množství',
        type: 'number',
        width: 100,
        visible: true,
    },
    {
        field: 'stockPrice',
        headerName: 'Cena za kus $',
        type: 'number',
        width: 130,
        visible: true,
    },
    {
        field: 'buyDate',
        headerName: 'Datum transakce',

        width: 200,
        visible: true,
    },
    {
        field: 'longevity',
        headerName: 'Pozice',

        width: 200,
        visible: true,
    },
    {
        field: 'freeRideLabel',
        headerName: 'Free Ride',

        width: 200,
        visible: true,
    },

];