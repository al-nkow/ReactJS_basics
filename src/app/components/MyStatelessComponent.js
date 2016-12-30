import React from "react";

// if you don't need the State - use stateless component
// but you can change props from outside
export const MyStatelessComponent = (props) => {
    return (
        <div>
            <h3> +++ This is MyStatelessComponent! +++ </h3>
            <a href="#"> {props.homeLink} </a>
        </div>
    );
};