import { EnhancedStore} from "@reduxjs/toolkit";
import ToDoReducer, {myAction, ToDoState} from "./reducers/toDoReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {createStore} from "redux";

let store= createStore(
        ToDoReducer,
) as EnhancedStore<ToDoState, myAction>;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
