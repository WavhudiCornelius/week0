import React from 'react';
import {NavLink} from 'react-router-dom';

export default function ProfilesPage(props){
    // this variable holds the JSX for each profile
    // each element is a link to the developer's profile page
    // when this element is clicked, it'll forward the username and id of the developer, to the main app
    var ProfileItems = props.developers.map(developer => (
            <li  onClick={() => props.viewProfilePage({name: developer.username, id: developer._id})} key={developer._id} dev={developer}>
                <NavLink to={`profile/${developer.username}/${developer._id}`}>
                    <span className="name">{developer.username || developer.name}</span>
                    {/* <span className="rank">{developer.stars}</span> */}
                </NavLink>      
            </li>
        )    
    );

    return (
        <div className="profiles-container">
            <ul className="profile-list">
                {ProfileItems}
            </ul>
            
        </div>
    );
}