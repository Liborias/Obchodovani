import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabel(props) {
    const [state, setState] = React.useState({
        checkedA: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormControlLabel
            control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" color="primary" />}
            label={props.switchLableName}
            labelPlacement="top"
        />

    );
}