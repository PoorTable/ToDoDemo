import React from "react";

const ProfileController: React.FC = ({ children }) =>{
    const onPress=()=>{
        console.log('Hi');
    };
    return React.cloneElement(children as React.ReactElement,{ onPress } )
}

export default ProfileController;
