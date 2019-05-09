import React from "react";

export function SelectComponent(props) {
    return(
        <select onChange={props.changeValue}>
        {props.passedValues.map((option, index) => {
            return <option key={index} value={option}>{option}</option>
        })}
        </select>
    );
}