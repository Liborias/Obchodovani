import React from "react";
import TextField from '@material-ui/core/TextField';

const NumberField = ({ min, max, onChange, ...rest }) => (
    <TextField
        {...rest}
        type="number"
        onChange={(e) => {
            const value = e.target.value ? parseInt(e.target.value) : "";
            if (typeof min === "number" && min > value) {
                onChange(min);
                return;
            }
            if (max && max < value) {
                onChange(max);
                return;
            }
            onChange(value);
        }}
    />
);


export default NumberField;