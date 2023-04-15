import { useState, useEffect } from 'react';
import './App.css';
import BeerList from './beer';

function App() {

  return (
    <div className="App">
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">All Beers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My Beers</a>
          </li>
        </ul>
      </div>
      <div className="allBeers">
        <BeerList></BeerList>
      </div>
    </div>
  )
}

export default App;
