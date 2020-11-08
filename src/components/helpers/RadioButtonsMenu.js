import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { randomId } from "./helpFce";

/*
              props.editOption={props.editOption}
              props.setEditOption={props.setEditOption}
              props.setNewRow={props.setNewRow}
              props.setSecondRow={props.setSecondRow}
              props.defaultRow={props.defaultRow}   
*/

const RadioButtonsMenu = (props) => (
    <FormControl component="fieldset">
        <RadioGroup aria-label="whatToDo" name="whatToDo1" value={props.editOption} row>
            <FormControlLabel
                value="new"
                label="Nová pozice"
                control={<Radio
                    color="primary"
                    onChange={(e) => { props.setEditOption(e.target.value); props.setNewRow(props.defaultRow); props.setSecondRow({ ...props.defaultRow, id: randomId() }) }}
                />}
            />
            <FormControlLabel
                value="sell"
                disabled={props.editOption === "new" && props.option === "new"}
                label="Prodat"
                control={<Radio
                    color="primary"
                    onChange={(e) => { props.setEditOption(e.target.value); props.setNewRow(props.initialNewRow) }}
                />}
            />
            <FormControlLabel
                value="split"
                disabled={props.editOption === "new" && props.option === "new"}
                label="Rozdělit"
                control={<Radio
                    color="primary"
                    onChange={(e) => { props.setEditOption(e.target.value); props.setNewRow(props.initialNewRow) }}
                />}
            />
            <FormControlLabel
                value="edit"
                disabled={props.editOption === "new" && props.option === "new"}
                label="Editovat"
                control={<Radio
                    color="primary"
                    onChange={(e) => { props.setEditOption(e.target.value); props.setNewRow(props.initialNewRow); props.setSecondRow(props.defaultRow) }}
                />}
            />
        </RadioGroup>
    </FormControl>
);
export default RadioButtonsMenu;