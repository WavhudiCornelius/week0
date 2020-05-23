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

    //this ref's are used to access the value of the user inputs
    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
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
            handleLogin={this.handleLogin}
            username={this.usernameInput}
            password = {this.passwordInput}
          />
        }
      </div>
    );
  }

  handleLogin = (e)=>{
    e.preventDefault();
    //make sure to use refs and not just ref
    var username = this.usernameInput;
    var password = this.passwordInput;

    /** the following function makes a get request to the address bellow, with the url
     * parameters obtained from the form. It then converts the obtained data into json and then,
     * with that json, sets the state of the app, which will be used to render the developer list
     */
    // the data to be sent to the server for authentication 
    var loginDetails = {
            username: username,
            password: password,
        }
    
    console.log(loginDetails);
    // sending the data to the server
    // fetch("/api/auth", {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(loginDetails)
    // }) 
    // .then(res => res.json()) //only work if there's a response
    // .then(json => {
    //     if(json.username){ // if the username was found
    //         if (json.successfullLogin){ // if the login was successfull
    //             // fetch the developer profiles
    //             fetch("/api/profiles").then(data=>data.json())
    //                 .then(json=>this.setState({developers: json}));
    //         }
    //         else{ // the password was wrong
    //             console.log("Wrong password");
    //         }
    //     }
    //     else{
    //         console.log("Username not found");
    //     }
    // })
    // .catch(err => console.log("Error: ", err));        
  }
}
  

export default App;
