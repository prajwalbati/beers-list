import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/redux.hooks';
import { getAllBeers } from './action';
import BeerItem from './beerItem';

function BeerList() {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);

  const dispatch = useAppDispatch();
  const { beers, beersLoading }: any = useAppSelector((state) => state.beerReducer);

  useEffect(() => {
    dispatch(getAllBeers({ page, perPage }));
  }, [page, perPage]);


  return (
    <div>
        {beersLoading ? (
            <h3>Loading</h3>
        ):(
            <div className="row">
                {beers && beers.map((beer: any, index: number) => {
                    return (
                        <BeerItem beer={beer} key={index}></BeerItem>
                    )
                })}
            </div>
        )}

    </div>
  )
}

export default BeerList;
