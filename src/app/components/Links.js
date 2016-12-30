import React from "react";

export class Links extends React.Component {
    render() {
        return (
            <div>
                <h3>=== This is Links.js ===</h3>
                <p>{this.props.myLink}</p>
                <br/>
            </div>
        );
    }
}