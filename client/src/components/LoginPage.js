import React from 'react';

export default class LoginPage extends React.Component {
    constructor(props){
        super(props);
        // I was trying to create a way for the main app to read the values of the form
        // this.username = React.useRef(this.props.username);
        // this.password = React.useRef(this.props.password);
    }
    
    
    render(){
        return (
            <div className="login">
                <form id="search" onSubmit={this.props.handleLogin} method="POST">
                    {/* ref is a property that will help react find the input field later */}
                    <label htmlFor = "username">Enter your username:</label>
                    <input type="text" name="username"  placeholder="username" required/>
                    <label htmlFor="password">Enter your password:</label>
                    <input type="password" name="password"  placeholder="password" required/> 
                    <input type="submit" value="Login" />
                </form>

            </div>
        );
    }
    
}