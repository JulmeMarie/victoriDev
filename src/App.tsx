import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './Views/Components/ScrollTop/ScrollTop';
import Routing from './routing';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollTop />
        <Routing />
      </BrowserRouter>
    </div>
  );
}
export default App;
