import React, {Component} from 'react';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilesPage';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      developers: [],
      isLoggedIn: false,
      username: null,

    };

  }

  render(){
    return (
      <div className="App">
        {this.state.isLoggedIn ? 
          <ProfilePage
            developers={this.state.developers} 
          /> 
          : 
          <LoginPage 
            login={this.login}
          />
        }
      </div>
    );
  }

  login = (loginDetails)=>{
    // sending the data to the server
    fetch("/api/auth", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginDetails)
    }) 
    .then(res =>  res.json()) //only work if there's a response
    .then(json => {
        if(json.username){ // if the username was found
            if (json.successfullLogin){ // if the login was successfull
                // fetch the developer profiles
                fetch("/api/profiles").then(data=>data.json())
                    .then(json=>{this.setState({developers: json});
                    console.log(this.state);
            });
            }
            else{ // the password was wrong
                console.log("Wrong password");
            }
        }
        else{
            console.log("Username not found");
        }
    })
    .catch(err => console.log("Error: ", err));        
  }
}
  

export default App;
