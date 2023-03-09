import React from "react";


type Props = {
    name: string;
    desc: string;
    onDeleteClick: () => void;
}

const ToDoListElement = ({ name, desc, onDeleteClick }: Props) => {

    const st = { display: 'flex', gap: '1e,' }

    return (<div style={st}>
        <div>{name}</div>
        <div>{desc}</div>
        <div><button onClick={() => onDeleteClick()}>
            Delete
            </button></div>
    </div>)
}

export default ToDoListElement;