import { useState, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import BeerList from './components/beer/BeerList';
import MyBeerList from './components/mybeer/MyBeerList';
import AddBeerModal from './components/mybeer/AddBeerModal';

function App() {
    const [listType, setListType] = useState<string>('all');
    const [showAddBeerModal, setShowAddBeerModal] = useState<boolean>(false);
    const [reloadBeers, setReloadBeers] = useState<boolean>(false);

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
            <Navbar loadBeers={loadBeers} openModal={openModal} listType={listType}></Navbar>

            <div className="allBeers">
                {listType=== 'all' ? (
                    <BeerList></BeerList>
                ) : (
                    <>
                        <MyBeerList openModal={openModal} reloadBeers={reloadBeers}></MyBeerList>
                        <AddBeerModal showAddBeerModal={showAddBeerModal} closeModal={closeModal} beerAdded={beerAdded} ></AddBeerModal>
                    </>
                )}
            </div>
        </div>
    )
}

export default App;