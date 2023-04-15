import { combineReducers } from 'redux';
import BeerSlice from '../../beer/slice';

const rootReducer = combineReducers({
  beerReducer: BeerSlice
});

export default rootReducer;
