import React from 'react';

export default function SingleProfile(props){
    console.log(props);
    console.log(props.developer);
    return (
        <div className="single-profile">
            
            <h2>{`You are viewing the profile of ${props.developer.username || props.developer.name}`}</h2>
            
        </div>
    );
}