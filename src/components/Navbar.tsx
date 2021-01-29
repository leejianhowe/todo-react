import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export default class Navbar extends React.Component{

    render(){
        return (
            <nav>
                <NavLink exact activeStyle={{fontWeight:'bold'}} to="/">Home</NavLink>
                <NavLink activeStyle={{fontWeight:'bold'}} to="/form">Form</NavLink>
            </nav>
        )
    }
}