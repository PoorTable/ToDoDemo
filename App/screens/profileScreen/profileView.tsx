import React, { ReactElement } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

interface i1 {
    onPress: Function,
}

const ProfileView =({onPress}:i1): ReactElement  => {
    return(
        <SafeAreaView>
            <TouchableOpacity onPress={()=>{onPress()}}>
                <Text> Calendar </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default ProfileView;
