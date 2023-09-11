import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend><h1>🍳🍳Display🍳🍳</h1>
            </legend>
            <h4>
            <p>Your Form Data</p>
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Email: {props.email}</p>
                <p>Password: {props.password}</p>
                <p>Confirm Password: {props.confirmPassword}</p>
            </h4>
        </fieldset>
    )
}

export default Display