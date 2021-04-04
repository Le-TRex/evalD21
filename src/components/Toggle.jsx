import React, {Fragment} from 'react';
import Switch from '@material-ui/core/Switch';
import '../stylesheets/toggle.css'

let Toggle = (props) => {
  const [state, setState] = React.useState({
    checkedA: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return(
    <div className="toggle">
      <label className="switch" >
        <h3>{props.toggleContent.question}</h3>
      </label>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        color="primary"
        name="checkedA"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

      <input  type="hidden" value={state.checkedA} name={props.toggleContent.answer.name}/>
    </div>
  );
}

export default Toggle