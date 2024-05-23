import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"
import { meteoReducer } from "../../reducers/meteo-reducer";
import { appReducer } from "./app-reducer";

const rootReducer = combineReducers({
  meteoData: meteoReducer,
  app : appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store;