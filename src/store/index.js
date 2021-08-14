import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension' 

//export const store = createStore(rootReducer, applyMiddleware(thunk));

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
export const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));