import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'toggle':
      return !state;
    default:
      return state;   
  }
};

const ToggleButton = () => {
  const [isToggled, dispatch] = useReducer(reducer, false);

  return (
    <div>
      <button onClick={() => dispatch({type: 'toggle'})}>{isToggled ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default ToggleButton;
