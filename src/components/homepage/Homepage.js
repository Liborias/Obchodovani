import React from "react";
import DataTable from "../tables/DataTable";
import AddTransactionModal from "../Modal/AddTransactionModal";
import { columns } from "../tables/dataPositions";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import "./Homepage.css"

const Homepage = (props) => {

  const [newColumns, setNewColumns] = React.useState(columns);
  const visibleColumns = newColumns.filter(column => column.visible);


  const handleChange = (event) => {
    const updated = newColumns.map(item => item.field === event.target.name ? { ...item, visible: event.target.checked } : item);
    setNewColumns(updated);
  }

  return (
    <>
      <div className="homePageContent">
        <h2>Aktuální portfolio</h2>
        <div className="tableMenu">
          <h3>Pevné pozice</h3>
          <FormControlLabel
            control={
              <Switch
                // defaultChecked={true} nekontrolovaný stav
                checked={newColumns.find(item => item.field === "freeRideLabel")?.visible}
                onChange={handleChange}
                name="freeRideLabel"
                color="primary"
              />
            }
            label="Zobraz: Free ride"
            labelPlacement="top"
          />
        </div>

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
          option="new"
        />}

        <DataTable
          key="pevne"
          columns={visibleColumns}
          rows={props.dataRows.filter(position => position.longevity !== "Plovoucí krátkodobá")}
          handleClickOpen={props.handleClickOpen}
          handleClose={props.handleClose}
          handleSave={props.handleSave}
          handleNewCompOpen={props.handleNewCompOpen}
          companies={props.companies}
          company={props.company}
          openNewCompany={props.openNewCompany}
          handleNewCompClose={props.handleNewCompClose}
          newCompanySave={props.newCompanySave}
          longevity="Pevná dlouhodobá"
          move={props.move}
        />
        <div className="tableWithTitle">
          <h3>Plovoucí pozice</h3>

          <DataTable
            key="plovouci"
            columns={visibleColumns}
            rows={props.dataRows.filter(position => position.longevity === "Plovoucí krátkodobá")}
            handleClickOpen={props.handleClickOpen}
            handleClose={props.handleClose}
            handleSave={props.handleSave}
            handleNewCompOpen={props.handleNewCompOpen}
            companies={props.companies}
            company={props.company}
            openNewCompany={props.openNewCompany}
            handleNewCompClose={props.handleNewCompClose}
            newCompanySave={props.newCompanySave}
            longevity="Plovoucí krátkodobá"
            move={props.move}
          />
        </div>
      </div>
    </>
  );


};
export default Homepage;


