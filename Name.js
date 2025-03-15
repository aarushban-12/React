import React, {createContext, useContext} from 'react';

const NameContext = createContext();

const DisplayComponent = () => {
  const name = useContext(NameContext);

  return <h2>Hello, {name}!</h2>
};

const App = () => {
  return (
    <NameContext.Provider value="Alice">
      <DisplayComponent/>
    </NameContext.Provider>
  );
};

export default App;
