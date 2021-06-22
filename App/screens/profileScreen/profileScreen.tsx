import React, { ReactElement } from "react";
import ProfileView from "./profileView";
import ProfileController from "./profileController";


export default function ProfileScreen (): ReactElement  {

    return (
        <ProfileController>
            {/*// @ts-ignore */ }
            <ProfileView/>
        </ProfileController>
    )
}
