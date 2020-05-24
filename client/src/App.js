import React, {Component} from 'react';
import { Route, Switch, withRouter} from 'react-router-dom'; // the BrowserRouter is included in the index.js file, that imports this one, so no need to import it here
import LoginPage from './components/LoginPage';
import ProfilesPage from './components/ProfilesPage';
import SingleProfile from './components/SingleProfile';import './App.css';
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
          {/* Creating routes: one for the login page, and one for the profiles page */}
          
            <Switch>
              <Route path="/profiles" render={(props)=>
                <ProfilesPage 
                  {...props}
                  developers={this.state.developers} 
                  viewProfilePage={this.viewProfile}
                />}
              />

              <Route path="/profile/:name/:id" render={(props) => 
                <SingleProfile 
                  {...props} 
                  // finding the developer whose id matches the requested id from the url
                  developer={this.state.developers.find(dev => dev._id === props.match.params.id)}
                />}
                >
              </Route>

              <Route exact={true} path="/" render={(props) => <LoginPage {...props} login={this.login}/>}/>
            </Switch>
        </div>
    );
  }

  login = (loginDetails)=>{
    // sending the data to the server, to check if the login details are valid
    fetch("/api/auth", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginDetails)
    }) 
    .then(res =>  res.json()) // only works if there's a response
    .then(json => {
        if(json.username){ // if the username was found
            if (json.successfullLogin){ // if the login was successfull
                this.setState({isLoggedIn: true, username: json.username}); // the admin has successfully logged in
                
                // fetching the developer profiles
                fetch("/api/profiles").then(data=>data.json())
                // adding the profiles to the state of the app
                    .then(json=>{
                      this.setState({developers: json});
                      console.log(this.state); // REMOVE THIS LINE
                      this.props.history.push("/profiles"); // redirecting the admin to the profiles page
                      // console.log(this.props);// REMOVE THIS LINE
                    })
                    .catch(err => console.log("Error: ", err));
            }
            else{ // the password was wrong
                console.log("Wrong password");
            }
        }
        else{ // the username does not exits, or is not an admin
            console.log("Username not found");
        }
    })
    .catch(err => console.log("Error: ", err));        
  }

  // this function is passed on to the profile items, so that the single profile can be viewed on a separate page
  viewProfile = (profile) => {
    let username = profile.name;
    let id = profile.id;

    // console.log(`You want to view the profile of ${username} with id of ${id}`);
    // console.log(this.props);
  }
}

  

export default withRouter(App); // withRouter is here so we can use props.history.push, to redirect the user
