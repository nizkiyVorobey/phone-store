import {AppStateInterface} from './appStateInterface';
import { phoneState, hotPriceState } from './phonesInterfaces';
import {favoriteDeviceState} from './favoriteDevice';
import { cartDeviceListState } from './cartDeviceList';
import { tabletState } from './tabletStateInterface';

export interface RootStateInterface {
    appState: AppStateInterface,
    phonesState: phoneState,
    hotPricePhones: hotPriceState,
    favoritesDevice: favoriteDeviceState,
    cartDeviceList: cartDeviceListState,
    tabletsState: tabletState
}