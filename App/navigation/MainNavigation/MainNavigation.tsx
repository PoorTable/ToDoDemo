import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer,} from "@react-navigation/native";
import ProfileScreen from '../../screens/profileScreen';
import { CalendarIcon, GroupsIcon, HomeworksIcon, ProfileIcon } from "../../assets";
import ToDoScreen from "../../screens/toDoScreen";


const Tab = createBottomTabNavigator();

export default function MainNavigation(){

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#000000',
                    inactiveTintColor: '#000000'
                }}>

                <Tab.Screen name="ToDo" component={ToDoScreen} options={{
                    tabBarLabel: 'ToDo',
                    tabBarIcon: () => (
                        <HomeworksIcon/>
                    ),
                }} />

                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <ProfileIcon/>
                    ),
                }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
