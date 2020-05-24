import React, {Component} from 'react';
import fire from '../config/Fire';
//import { Link, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';
import '../styles/profile.css'

export default class Profiles extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {developers: []};
    }

    logout(){
        fire.auth().signOut();
    }

    // fetching the developers profile from the server
    componentDidMount() {
        axios.get('http://localhost:4000/api/profiles')
            .then(response => {
                this.setState({ developers: response.data })
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render(){
        return (
            <div className="container">
                <div className="navbar">
                    <nav>
                        <ul>
                            <li>createProfile</li>
                            <li><button onClick={this.logout}>LogOut</button></li>
                        </ul>
                    </nav>
                </div>
                <div className="developers">
                    <div className="avatar">AVATAR Image</div>
                    <div id="company">Zaio Developer</div>
                    <div id="name"> Wavhudi Mulaudzi</div>
                    <div id="description">Full stack developer</div>
                    <div id="meet"> Meet me</div>
                    <div id="contact-1">git hub</div>
                    <div id="contact-2">youTube</div>
                </div>
            </div>
        );
    }
}