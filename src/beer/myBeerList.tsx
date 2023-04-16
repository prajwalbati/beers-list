import { useState, useEffect } from 'react';
import BeerItem from './beerItem';
import CustomBeer from '../assets/custom-beer.png';

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
                            <div className="col-lg-6 col-md-12">
                                <div className="card mb-4 p-2">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-2 text-center">
                                                <img src={CustomBeer} alt="" height="100px" />
                                            </div>
                                            <div className="col-sm-10 text-left">
                                                <h3>{beer.name}</h3>
                                                <h6>{beer.genre}</h6>
                                                <p className="card-text">{beer.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}

        </div>

    );
};

export default MyBeerList;