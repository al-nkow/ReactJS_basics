import React from "react";

export class Myblock extends React.Component {


    constructor(props) {

        super();
        // this.age = props.age;
        // this.name = props.name;
        this.state = { // watch this
            age: props.initialAge,
            name: props.name
        };

        setTimeout(() => {
            this.setState({ // render
                name: 'Vasiliy'
            });
        }, 4000);

    }

    onMakeOlder() {
        this.setState({ // render
            age: this.state.age + 3
        });
        // this.age += 3;
        // console.log('The age now is ' + this.age);
    }

    // this.onMakeOlder.bind(this) - нельзя this.onMakeOlder() -  так как сразу выполнится
    // или так:
    // () => this.onMakeOlder()
    render() {
        return (
            <div>
                <h3>=== IT IS A MYBLOCK COMPONENT! ===</h3>
                <div>Your name is {this.state.name}.</div>
                <div>Your are {this.state.age} years old.</div>
                <br/><br/>
                <button onClick={this.onMakeOlder.bind(this)}>Make you older!</button>
                <br/><br/>
                <button onClick={this.props.greet}>Greet (from parent component)</button>
                <hr/>
                <hr/>
            </div>
        );
    }
}

// хорошая практика явно указывать типы props
Myblock.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func
};