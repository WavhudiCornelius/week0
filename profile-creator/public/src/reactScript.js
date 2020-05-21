//this is the front-end part of the code
//it makes requests using the fetch api
//it calls the api methods in this way, thus, connecting to the back-end

// var React = require("react");
// var ReactDOM = require("react-dom");

function DevItem(props){
    return (
        <li  onClick={() => props.onClick(props)}>
            <span className="name">{props.developer.name}</span>
            <span className="rank">{props.developer.stars}</span>
        </li>
    );
}

class LoginPage extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            developers: []
        };
    }

    render(){
        // this is an array of JSX elements
        var developers = this.state.developers.map((developer, index)=>{
            return(
                <DevItem 
                    developer = {developer}
                    key = {index}
                    onClick = {(props) => this.handleDeleteClick(props)}
                />
            );
        });        

        // this is what the render function returns
        return(
            <div id="ninja-container">
                <form id="search" onSubmit={this.handleLogin} method="POST">
                    {/* ref is a property that will help react find the input field later */}
                    <label for = "username">Enter your username:</label>
                    <input type="text" name="username" ref="username" placeholder="username" required/>
                    <label for="password">Enter your password:</label>
                    <input type="password" name="password" ref="password" placeholder="password" required/> 
                    <input type="submit" value="Login" />
                </form>
                {/* the developer list created is now here */}
                <ul>{developers}</ul>

            </div>
        );
    }

    handleLogin = (e)=>{
        e.preventDefault();
        //make sure to use refs and not just ref
        var username = this.refs.username.value;
        var password = this.refs.password.value;

        /** the following function makes a get request to the adress bellow, with the url
         * parameters obtained from the form. It then converts the obtained data into json and then,
         * with that json, sets the state of the app, which will be used to render the developer list
         */
        // the data to be sent to the server for authentication 
        var loginDetails = {
                username: username,
                password: password,
            }

        // sending the data to the server
        fetch("/api/auth", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginDetails)
        }) 
        .then(res => res.json()) //only work if there's a response
        .then(json => {
            if(json.username){ // if the username was found
                if (json.successfullLogin){ // if the login was successfull
                    // fetch the developer profiles
                    fetch("/api/profiles").then(data=>data.json())
                        .then(json=>this.setState({developers: json}));
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

    // handleSubmitPostAndUpdate = (e) =>{
    //     e.preventDefault();

    //     const name = this.refs.name.value;
    //     const rank = this.refs.rank.value;

    //     //the data that will be part of the body of the request
    //     var data;

    //     var foundNinjaIndex = this.state.developers.findIndex(developer => developer.name === name);
    //     //if the name is in the db, assuming names are unique
    //     if (foundNinjaIndex !== -1){
    //         // new data for the developer
    //         data = {
    //             rank: rank
    //             //other updated properties can go in here
    //         };

    //         //updating info about the developer with existing name
    //         fetch(`/api/profiles/${name}`, {
    //             method: "PUT",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(data)
    //         }) /** not updating the state here */
    //         .then(res => res.json())//only work if there's a response
    //         .then(json => {
    //             console.log("State 1: ", this.state.developers);
    //             var newNinjas = [...this.state.developers];
    //             newNinjas[foundNinjaIndex] = json;
    //             //console.log(newNinjas[foundNinjaIndex]);
    //             console.log("State 2: ", this.state.developers);
    //             this.setState({developers: [...newNinjas]});
    //             console.log("State 3: ", this.state.developers);

                
    //         })
    //         .catch(err => console.log("Error: ", err));
    //     }
    //     else{ 
    //         data = {
    //             name: name,
    //             rank: rank,
    //             available: true,
    //             geometry: {
    //                 type: "Point",
    //                 coordinates: [109, 15.4]
    //             }
    //         };

    //         //posting it to the db
    //         fetch("/api/profiles", {
    //             method: "POST",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(data)
    //         }) 
    //         .then(res => res.json())//only work if there's a response
    //         .then(json => this.setState({developers: [...this.state.developers, json]}))
    //         .catch(err => console.log("Error: ", err));
    //     }        
    // }


    //I can't believe this worked the first time!!!!
    
    handleDeleteClick = (props) => {
        fetch(`/api/profiles/${props.developer._id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(props.developer)
        }) 
        .then(res => res.json())//only work if there's a response
        .then(json => {this.setState({developers: this.state.developers.filter(developer=>developer._id !== json._id)})})
        .catch(err => console.log("Error: ", err));
    }
}

ReactDOM.render(<LoginPage/>, document.querySelector("#reactApp"));