import React from "react";

export class Butlinks extends React.Component {

    constructor(props) {
        super();
        this.state = {
            // homeLink: "Some new name"
            homeLink: props.initialLinkName
        };
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event) }/>
                <br/>
                {/* если внутри функции используется this его надо передать через bind! */}
                <button onClick={this.onChangeLink.bind(this)}>Click me!</button>
                <br/>
                <hr/>
                <br/>
            </div>
        );
    }
}

Butlinks.propTypes = {
    initialLinkName: React.PropTypes.string
};