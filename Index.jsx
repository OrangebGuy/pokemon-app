import React from 'react';
import ReactDOM from 'react-dom';
import Pokemones from './pokemones';

const App = () => {
  return (
    <div>
      <Pokemones />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));