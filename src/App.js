import React from 'react';

import Navbar from './components/navbar';
import Rotas from './views/rotas';

function App() {
  return (
  <>
    <div className="container">
      <Navbar/>
      <Rotas/>
    </div>
  </>
  );
}

export default App;
