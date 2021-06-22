import ActionsTypes from "../actions/actionsTypes";
import {Item} from "../../types";
import {AnyAction, Reducer} from "redux";

const initialState = {
    number: 0 as number | 0,
    Items: [] as  Array<Item> | [],
}

export type ToDoState = typeof initialState;

export interface myAction{
   payload: Item,
    type: keyof typeof ActionsTypes;
}


const ToDoReducer: Reducer<ToDoState, myAction> = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.ADD:
            let p = state.number + 1;
            console.log('asd');
            console.log(action.payload);
            console.log(state);
            let it = [...state.Items,action.payload]
            console.log(it)
            return {
                ...state,
                Items: it,
            };
        case ActionsTypes.REMOVE:
            let m = state.number - 1;
            console.log(action.payload)
            const index = Array.from(state.Items).indexOf(action.payload);
            let items;
            if (index > -1) {
                state.Items.splice(index, 1);
                items = state.Items
                console.log(items)
            }
            else {
                items = state.Items;
            }
            return {
                ...state,
                Items: items,
                number: m
            };
        case ActionsTypes.QQ:
            return {
                ...state
            }
        default:
            return state;
    }
};

export default ToDoReducer;
