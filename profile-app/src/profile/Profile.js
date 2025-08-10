import React from "react";
import "./profile.css";

function Profile({name, age, job}){
    return(

        <div className="profile-div">
            <h2>Name : {name || "Unknown"} </h2>    
            <h2>Age : {age || "Unknown"} </h2>
            <h2>Job : {job || "Unknown"} </h2>
         </div>

    );
};

export default Profile;