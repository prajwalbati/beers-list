import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { getAllBeers } from '../../action/beer.action';
import Beer from './Beer';

function BeerList() {
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(10);
    const [allBeers, setAllBeers] = useState<any>([]);

    const dispatch = useAppDispatch();
    const { beers, beersLoading }: any = useAppSelector((state) => state.beerReducer);

    useEffect(() => {
        if (beers && beers.length > 0) {
            let totalBeers = [...allBeers, ...beers];
            setAllBeers(totalBeers);
        }
    }, [beers]);

    useEffect(() => {
        if (page == 1) {
            setAllBeers([]);
        }
        dispatch(getAllBeers({ page, perPage }));
    }, [page, perPage]);

    const loadMoreBeers = () => {
        setPage(page + 1);
    };

    return (
        <div>
            <div className="row">
                {allBeers && allBeers.map((beer: any, index: number) => {
                    return (
                        <Beer beer={beer} key={index}></Beer>
                    )
                })}
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    {beersLoading ? (
                        <h3>Loading</h3>
                    ):(
                        <a className="loadMore" onClick={loadMoreBeers}>Load More <i className="fa fa-chevron-down"></i></a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BeerList;
