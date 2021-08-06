import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: purple[900],
      },
      secondary: {
        main: '#f44336',
      },
  },
});


export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('child');
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setValue(event.target.value);
    setSelectedValue(event.target.value);
  };



  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
        <FormControlLabel value="child" control={<Radio color='secondary'/>} label="Child" />
        <FormControlLabel value="parent" control={<Radio color="secondary"/>} label="Parent" />
    
      </RadioGroup>
    </FormControl>
  );
}

// import React from 'react'

// function RadioButtons() {
//     return (
//         <>
//         <div className="center_radio">
//             <input type="radio" id="child" name="select" value="child" />
//             <label htmlFor="child">Child</label>
//             <div class="check"></div>
//         </div>
//         <div className="center_radio">
//             <input type="radio" id="parent" name="select" value="parent" />
//             <label htmlFor="parent">Parent</label>
//             <div class="check"></div>
//         </div>
//         </>
//     )
// }

// export default RadioButtons
