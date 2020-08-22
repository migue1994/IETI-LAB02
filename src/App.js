import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import TodoApp from "./components/TodoApp";
import Login from "./components/Login";

export default function App() {

    useEffect(() => {
        const user = {
            email: 'miguel.rivera-r@mail.escuelaing.edu.co',
            password: '123'
        }
        localStorage.setItem('user', JSON.stringify(user));
    },[]);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <div className="links">
                    <Link to="/">Login</Link>
                    <Link to="/todo">Todo</Link>
                </div>

                <div>
                    <Route exact path="/todo"><TodoApp/></Route>
                    <Route exact path="/"><Login/></Route>
                </div>
            </div>
        </Router>
    );
}
