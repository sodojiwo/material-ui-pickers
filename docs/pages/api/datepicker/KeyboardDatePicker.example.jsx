import React, { Fragment, useState } from 'react';
import { KeyboardDatePicker } from 'material-ui-pickers';

function KeyboardDatePickerExample(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <div className="picker">
        <KeyboardDatePicker
          keyboard
          clearable
          label="Uncontrolled input"
          value={selectedDate}
          onChange={handleDateChange}
          animateYearScrolling={false}
          minDate={new Date()}
          onInputChange={e => console.log('Keyboard Input:', e.target.value)}
        />
      </div>

      <div className="picker">
        <KeyboardDatePicker
          keyboard
          label="Masked input"
          format={props.getFormatString({
            moment: 'MM/DD/YYYY',
            dateFns: 'MM/dd/y', // make sure that for date-fns your format is "y" instead of "yyyy"
          })}
          placeholder="10/10/2018"
          mask={value =>
            // handle clearing outside if value can be changed outside of the component
            value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : []
          }
          value={selectedDate}
          onChange={handleDateChange}
          disableOpenOnEnter
          animateYearScrolling={false}
        />
      </div>
    </Fragment>
  );
}

export default KeyboardDatePickerExample;