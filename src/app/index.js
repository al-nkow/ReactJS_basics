import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header.js"
import { Home } from "./components/Home.js"
import { Footer } from "./components/Footer.js"
import { Myblock } from "./components/Myblock.js"
import { MyStatelessComponent } from "./components/MyStatelessComponent.js"

class App extends React.Component {
    render() {
        var someuser = {
            login: 'Zwemborg',
            pass: '34mPO4543nxioS2',
            perms: ['read', 'copy', 'delete', 'comment', 'move']
        };
        return (
            <div className="yourclass">

                <div className="section">
                    <MyStatelessComponent homeLink="Home"/>
                </div>

                <br/>
                <hr/>
                <br/>

                <div className="section">
                    <Myblock name={"Vasya"} initialAge={25}/>
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