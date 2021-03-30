import React from 'react';
import Switch from '@material-ui/core/Switch';

//TODO attention à lier le state de checkedA et checkedB aux différentes options (oui / non)
// + lier avec la question via label (probablement dans Question)
function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}

export default Switches