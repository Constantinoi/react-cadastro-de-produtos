import React from 'react';

import Navbar from './components/navbar';
import Rotas from './views/rotas';

import { HashRouter} from 'react-router-dom'

function App() {
  return (
  <HashRouter>
    <div className="container">
      <Navbar/>
      <Rotas/>
    </div>
  </HashRouter>
  );
}

export default App;
