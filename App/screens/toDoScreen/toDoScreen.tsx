import React, { ReactElement } from "react";
import ToDoView from "./toDoView";
import ToDoController from "./toDoController";


export default function ProfileScreen (): ReactElement  {
    return (
        <ToDoController>
            {/*// @ts-ignore */ }
            <ToDoView/>
        </ToDoController>
    )
}
