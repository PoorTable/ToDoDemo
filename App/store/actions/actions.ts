import {Item} from "../../types";
import ActionsTypes from "./actionsTypes";

export const Add = (item:Item) => {
    return {type: "INSERT", payload: item}
}

export const Remove = (item:Item) => {
    return {type: "DELETE", payload: item}
}
