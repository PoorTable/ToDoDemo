import React, {useState} from "react";
import ActionsTypes from "../../store/actions/actionsTypes";
import {useDispatch, useSelector} from "react-redux";
import {Add, Remove} from "../../store/actions/actions";
import {Item} from "../../types";
import {useAppSelector} from "../../store/store";

const ToDoController: React.FC = ({ children }) =>{
    const [text, setText] = useState('');
    const Items = useAppSelector(state => state.Items)
    const onTextChange = (value: string) =>{
        setText(value);
    }
    const dispatch = useDispatch();
    const onPress=()=>{
        let ItemAdd: Item = {key: Math.random(), description: text}
        dispatch(Add(ItemAdd));
    };
    const onDelete = (item:Item)=>{
        dispatch(Remove(item));
    }
    return React.cloneElement(children as React.ReactElement,{ onPress,onTextChange, text: text, Items:Items,onDelete } )
}

export default ToDoController;
