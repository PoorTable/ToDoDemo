import React from "react";
import MainNavigation from "./navigation/MainNavigation/MainNavigation";
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import toDoReducer from "./store/reducers/toDoReducer";
import rootSaga from "./store/sagas/ToDoSaga";

const App = () =>{

    const sagaMiddleware = createSagaMiddleware();
    // const composeEnhancers = composeWithDevTools({
    //     trace: true,
    //     traceLimit: 25,
    // })
    const store = createStore(
        toDoReducer,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return(
        <Provider store={store}>
            <MainNavigation/>
        </Provider>
    )

}

export default App;
