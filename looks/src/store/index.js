import { createStore, compose, applyMiddleware } from "redux";  
import promise from 'redux-promise';  
import { createLogger } from 'redux-logger';  
import reduxThunk from "redux-thunk";


export default function configureStore(reducer, initialState = {}) {
    const logger = createLogger();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const enhancer = compose(
		composeEnhancers(applyMiddleware(reduxThunk, promise, logger))
    );
    
	return createStore(reducer, initialState, enhancer);
}