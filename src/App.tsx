import { useState, useEffect } from 'react';
import './App.css';
import BeerList from './beer';
import MyBeerList from './beer/myBeerList';
import AddBeerModal from './beer/addBeerModal';

function App() {
  const [listType, setListType] = useState<string>('all');
  const [showAddBeerModal, setShowAddBeerModal] = useState<boolean>(false);
  const[reloadBeers, setReloadBeers] = useState<boolean>(false);

  const loadBeers = (type: string) => {
    if (listType != type) {
      setListType(type);
    }
  };

  const openModal = () => {
    setShowAddBeerModal(true);
    setReloadBeers(false);
  };

  const closeModal = () => {
    setShowAddBeerModal(false);
  };

  const beerAdded = () => {
    setReloadBeers(true);
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
            <button className='btn btn-primary' onClick={openModal}>Add a new beer</button>
          </li>
        </ul>
      </div>
      {listType=== 'all' ? (
        <div className="allBeers">
          <BeerList></BeerList>
        </div>
      ) : (
        <div className="allBeers">
          <MyBeerList openModal={openModal} reloadBeers={reloadBeers}></MyBeerList>
          <AddBeerModal showAddBeerModal={showAddBeerModal} closeModal={closeModal} beerAdded={beerAdded} ></AddBeerModal>
        </div>
      )}
    </div>
  )
}

export default App;
