import React from 'react';

export default class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleLogin = (e)=>{
        e.preventDefault();
        this.props.login(this.state); // passing the login details to the main app
    }
    
    // sets the state to the current user input
    handleInput = e =>{
        //using computed properties
        this.setState({[e.target.id]: e.target.value});
    }

    render(){
        return (
            <div className="login container">
                <form id="search" onSubmit={this.handleLogin} method="POST">
                    <label htmlFor = "username">Enter your username:</label>
                    <input type="text" id="username"  placeholder="username" onInput={this.handleInput} required autoComplete="true"/>
                    <label htmlFor="password">Enter your password:</label>
                    <input type="password" id="password" placeholder="password" onInput={this.handleInput} required autoComplete="true"/> 
                    <input type="submit" value="Login" />
                </form>

            </div>
        );
    }
    
}