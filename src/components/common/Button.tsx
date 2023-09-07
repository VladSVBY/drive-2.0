import React from "react";

export default function Button({buttonClass, title, onClick}: Button) {
    return (
        <button className={`btn ${buttonClass}`} onClick={onClick}>{title}</button>
    )
}