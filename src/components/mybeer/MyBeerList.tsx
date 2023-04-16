import { useState, useEffect } from 'react';

import MyBeer from './MyBeer';

const MyBeerList = (props: any) => {
    const [myBeers, setMyBeers] = useState([]);

    useEffect(() => {
        let beersFromStorage = window.sessionStorage.getItem('my-beers');
        if (beersFromStorage) {
            let beersArray = JSON.parse(beersFromStorage);
            setMyBeers(beersArray);
        }
    }, []);

    useEffect(() => {
        let beersFromStorage = window.sessionStorage.getItem('my-beers');
        if (beersFromStorage) {
            let beersArray = JSON.parse(beersFromStorage);
            setMyBeers(beersArray);
        }
    }, [props.reloadBeers]);

    const openAddBeerModal = () => {
        props.openModal();
    };

    return (
        <div>
            {myBeers.length == 0 ? (
                <div className="noBeerContent p-4 m-4">
                    <div className='align-middle text-center p-4'>
                        <p className="mb-1">Nothing to see yet.</p>
                        <p><a href="#" onClick={openAddBeerModal}>Click here</a> to add your first beer!</p>
                    </div>
                </div>
            ) : (
                <div className="row">
                    {myBeers && myBeers.map((beer: any, index: number) => {
                        return (
                            <MyBeer beer={beer} key={index}></MyBeer>
                        )
                    })}
                </div>
            )}
        </div>
    );
};

export default MyBeerList;