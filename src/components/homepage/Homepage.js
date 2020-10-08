import React from "react";
import DataTable from "../tables/Position";
import Button from '@material-ui/core/Button';
import AddTransactionModal from "../Modal/AddTransactionModal";
import NewCompanyModal from "../Modal/NewCompanyModal";
import { columns } from "../tables/dataPositions";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import "./Homepage.css"

const Homepage = (props) => {
  const [switches, setSwitchRideColumn] = React.useState({
    freeRideLabel: true
  })
  const [newColumns, setNewColumns] = React.useState(columns)


  const handleChange = (event) => {
    setSwitchRideColumn({ ...switches, [event.target.name]: event.target.checked });
    //if (switches[event.target.name]) { setNewColumns(columns.filter(x => x.field !== event.target.name)) } else { setNewColumns(columns) }
  };

  return (
    <>
      <div className="homePageContent">
        <h2>Aktuální portfolio</h2>
        <Button color="primary" onClick={props.handleClickOpen}>Nový obchod</Button>
        <div className="tableMenu">
          <h3>Pevné pozice</h3>
          <FormControlLabel
            control={
              <Switch
                checked={switches.freeRideLabel}
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
        />}
        <NewCompanyModal
          open={props.openNewCompany}
          handleNewCompClose={props.handleNewCompClose}
          newCompanySave={props.newCompanySave}
          companies={props.companies}
        />
        <DataTable columns={newColumns} rows={props.dataRows.filter(position => position.longevity !== "Plovoucí krátkodobá")} />
        <h3>Plovoucí pozice</h3>
        <DataTable columns={newColumns} rows={props.dataRows.filter(position => position.longevity === "Plovoucí krátkodobá")} />
      </div>
    </>
  );

};
export default Homepage;


