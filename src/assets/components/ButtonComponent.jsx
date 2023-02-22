import React from "react";

export default function ButtonComponent(props){
    return (

        <button onClick={props.buttonClick} className="btn flex">
            <span className="material-symbols-outlined search--icon">
                search
            </span>
            Search
        </button>
    )
}