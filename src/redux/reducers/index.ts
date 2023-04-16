import { combineReducers } from 'redux';

import BeerSlice from '../../slice/beer.slice';

const rootReducer = combineReducers({
    beerReducer: BeerSlice
});

export default rootReducer;
