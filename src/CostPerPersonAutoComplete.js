import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['500', '1000', '1500', '2000'];

export default function CostPerPersonAutoComplete() {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <Autocomplete
            fullWidth
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}

            renderInput={(params) => <TextField {...params} label="Kişi başı bütçe" variant="outlined" required />}
        />
    );
}