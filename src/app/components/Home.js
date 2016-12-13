import React from "react";

export class Home extends React.Component {
    render() {
        let somecontent = '';
        if (5 > 4) {
            somecontent = <p>More magic!</p>
        }
        return (
            <div>
                <h3>Oooooops, it's a home block!</h3>
                <div> { 25 + 37 } </div>
                <div> { somecontent } </div>
                <div> { 'Some string..' } </div>
                <div> { 5 == 2 ? 'Yes' : 'No' } </div>
            </div>
        );
    }
}