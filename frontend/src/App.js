import React, { Component } from 'react';
//import './styles/profile.css'
import Profiles from './components/profiles';
import Login from './components/login';
import fire from './config/Fire';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }

  // begins the authLister process
  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if(user){
        this.setState({ user });
      }else{
        this.setState({ user: null});
      }
    });
  }

  render(){
    return (
      <div>
        {this.state.user ? (<Profiles/>) : (<Login />)}
      </div>
    );
  }
}

export default App;
