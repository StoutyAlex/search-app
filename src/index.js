import React from 'react';

import './styles/_all.scss';

const App = () => {
  return (
    <div>Hello World</div>
  );
};

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

export default App;
