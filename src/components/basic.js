import React from 'react'

export const Nav = (props) => {
    return (
        <div className={`nav ${props.className}`}>{props.children}</div>
    )
}