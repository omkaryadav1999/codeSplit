import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./services/reducers/combineReducers";
import combinesaga from "./services/sagafiles/combineSagafiles";
import createSagaMiddleware from "redux-saga"


const sagaMiddleware = createSagaMiddleware();
const Store = compose(
    applyMiddleware(sagaMiddleware)
)(createStore)(rootReducers);

sagaMiddleware.run(combinesaga);

export default Store