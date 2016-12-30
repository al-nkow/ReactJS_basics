import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header.js"
import { Home } from "./components/Home.js"
import { Footer } from "./components/Footer.js"
import { Myblock } from "./components/Myblock.js"
import { MyStatelessComponent } from "./components/MyStatelessComponent.js"
import { Links } from "./components/Links.js"
import { Butlinks } from "./components/Butlinks.js"

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            myLink: "Home sweet home"
        };
    }

    onGreet() {
        alert('Hello!');
    }

    onChangeLinkName(newName) {
        this.setState({
            myLink: newName
        });
    }

    render() {
        var someuser = {
            login: 'Zwemborg',
            pass: '34mPO4543nxioS2',
            perms: ['read', 'copy', 'delete', 'comment', 'move']
        };
        return (
            <div className="yourclass">
                <div className="section">
                    {/* меняем myLink по клику на кнопку в другом компоненте! */}
                    <Links
                        myLink={this.state.myLink}
                    />
                    {/* так как внутри changeLink мы используем this - нужно передать контекст в функцию! */}
                    <Butlinks
                        initialLinkName={this.state.myLink}
                        changeLink={this.onChangeLinkName.bind(this)}
                    />
                </div>
                <div className="section">
                    <MyStatelessComponent homeLink="Home"/>
                </div>
                {/* передаем функцию в дочерний компонент через параметр greet */}
                <div className="section">
                    <Myblock name={"Vasya"} initialAge={25} greet={this.onGreet}/>
                </div>
                <h1>Hello</h1>
                <div className="section">
                    <Header/>
                </div>
                <div className="section">
                    <Header/>
                </div>
                <div className="section">
                    <Home/>
                </div>
                <div className="section">
                    <Footer name={"Petya"} age={25} user={someuser}>
                        <p>This is a child props!!!</p>
                    </Footer>
                </div>
            </div>
        );
    }
}

render( <App/>, window.document.getElementById('app') );
// <App/> - class App, связываем с элементом с id="app" из index.html