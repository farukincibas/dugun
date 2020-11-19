import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function Date() {
  const [selectedDate, handleDateChange] = useState("Thu Nov 19 2020 01:19:59 GMT+0300 (GMT+03:00)");

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
       required
       disableToolbar
       fullWidth
       inputVariant="outlined"
       format="MM/dd/yyyy"
       margin="normal"
       id="date-picker-outline"
       label="Düğün Tarihi"
       value={selectedDate}
       onChange={handleDateChange}
       KeyboardButtonProps = {{
         'aria-label': 'change date',
       }}
     />
    </MuiPickersUtilsProvider>
  );
}

export default Date