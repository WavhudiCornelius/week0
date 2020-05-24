import React, { Component } from 'react'
import fire from '../config/Fire';
import '../styles/styles.css';


export default class Login extends Component {

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value})
    }

    render() {
        return (
            <div id="homepage">
                <h1>The best website</h1>
                <form id="search" onSubmit={this.login}>
                    {/* ref is a property that will help react find the input field later */}
                    <label htmlFor = "username">Enter your email:</label>
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="email" required/>
                    <label htmlFor="password">Enter your password:</label>
                    <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="password" required/> 
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}