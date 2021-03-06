import { combineReducers, Reducer, AnyAction } from 'redux';
import { appState } from './appState';
import { phonesState } from './phones';
import { hotPricePhones } from './hotPricePhones';
import { favoritesDevice } from './favoritesDevice';
import { cartDeviceList } from './cartDeviceList';
import { tabletsState } from './tablets'

import { AppStateInterface } from '../../interfaces/appStateInterface';


// export interface ApplicationState {
//     appState: AppStateInterface;
//   }

// export default combineReducers<AppStateInterface, AnyAction>({appState});

export const rootReducer = combineReducers({
  appState,
  phonesState,
  hotPricePhones,
  favoritesDevice,
  cartDeviceList,
  tabletsState,
})

export type RootState = ReturnType<typeof rootReducer>