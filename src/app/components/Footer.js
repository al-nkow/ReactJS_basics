import React from "react";


export class Footer extends React.Component {
    render() {
        console.log('PROPS', this.props);
        return (
            <div>
                <h3>=== IT IS A FOOTER COMPONENT! ===</h3>
                <div>Your name is {this.props.name}.</div>
                <div>Your are {this.props.age} years old.</div>
                <div>
                    <h3>-- Permissions --</h3>
                    <ul>
                        {/* key={index} - здесь это типа trackBy в ангуляре */}
                        {this.props.user.perms.map( (perm, index) => <li key={index}>{perm}</li> )}
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

// хорошая практика явно указывать типы props
Footer.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};