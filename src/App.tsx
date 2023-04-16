import { useState, useEffect } from 'react';
import './App.css';
import BeerList from './beer';
import MyBeerList from './beer/myBeerList';
import AddBeerModal from './beer/addBeerModal';

function App() {
  const [listType, setListType] = useState<string>('all');

  const loadBeers = (type: string) => {
    if (listType != type) {
      setListType(type);
    }
  };

  return (
    <div className="App">
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a className={listType=='all'?'nav-link active':'nav-link'} aria-current="page" onClick={() => loadBeers('all')}>All Beers</a>
          </li>
          <li className="nav-item">
            <a className={listType=='my'?'nav-link active':'nav-link'} onClick={() => loadBeers('my')}>My Beers</a>
          </li>
          <li className={listType=='my'?'addBeerBtn':'d-none'}>
            <button className='btn btn-primary' onClick={() => loadBeers('my')}>Add a new beer</button>
          </li>
        </ul>
      </div>
      {listType=== 'all' ? (
        <div className="allBeers">
          <BeerList></BeerList>
        </div>
      ) : (
        <div className="allBeers">
          <MyBeerList></MyBeerList>
          <AddBeerModal></AddBeerModal>
        </div>
      )}
    </div>
  )
}

export default App;
