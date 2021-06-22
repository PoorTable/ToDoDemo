import Svg, { Path } from "react-native-svg";
import React from "react";

export const CalendarIcon =() =>{
    return(
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
        >
            <Path
                d="M15 2h4a1 1 0 011 1v16a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h4V0h2v2h6V0h2v2zm3 8H2v8h16v-8zm-5-6H7v2H5V4H2v4h16V4h-3v2h-2V4zm-9 8h2v2H4v-2zm5 0h2v2H9v-2zm5 0h2v2h-2v-2z"
                fill="#000"
            />
        </Svg>
    )
};

export const PhotoIcon =() =>{
    return(
        <Svg
            width={20}
            height={18}
            viewBox="0 0 20 18"
            fill="none"
        >
            <Path
                d="M7 0h6l2 2h4a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h4l2-2zm3 16a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8z"
                fill="#282828"
            />
        </Svg>
    )
};

export const HiddenPasswordIcon =() =>{
    return(
        <Svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
        >
            <Path
                d="M16.882 18.297A10.949 10.949 0 0111 20C5.608 20 1.122 16.12.18 11a10.982 10.982 0 013.34-6.066L.393 1.808 1.807.393l19.799 19.8-1.415 1.414-3.31-3.31zM4.935 6.35A8.965 8.965 0 002.223 11a9.005 9.005 0 0013.2 5.838l-2.027-2.028A4.5 4.5 0 017.19 8.604L4.935 6.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 003.24 3.241l.002.001zm7.893 2.264l-1.431-1.43a8.934 8.934 0 001.4-3.162A9.006 9.006 0 008.553 4.338L6.974 2.76C8.22 2.27 9.58 2 11 2c5.392 0 9.878 3.88 10.819 9a10.946 10.946 0 01-2.012 4.592zm-9.084-9.084a4.5 4.5 0 014.769 4.769l-4.77-4.769z"
                fill="#000"
            />
        </Svg>
    )
};

export const ShownPasswordIcon =() =>{
    return(
        <Svg
            width={22}
            height={18}
            viewBox="0 0 22 18"
            fill="none"
        >
            <Path
                d="M11 0c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.82 9C5.609 18 1.123 14.12.182 9 1.12 3.88 5.608 0 11 0zm0 16a9.005 9.005 0 008.777-7A9.005 9.005 0 002.223 9 9.005 9.005 0 0011 16zm0-2.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                fill="#000"
            />
        </Svg>
    )
};

export const GroupsIcon = () => {
    return(
        <Svg
            width={21}
            height={21}
            viewBox="0 0 21 21"
            fill="none"
        >
            <Path
                d="M4.455 13L0 16.5V1a1 1 0 011-1h15a1 1 0 011 1v12H4.455zm-.692-2H15V2H2v10.385L3.763 11zM7 15h10.237L19 16.385V6h1a1 1 0 011 1v13.5L16.545 17H8a1 1 0 01-1-1v-1z"
                fill="#000"
            />
        </Svg>
    )
}

export const  HomeworksIcon =() =>{
    return(
        <Svg
            width={18}
            height={20}
            viewBox="0 0 18 20"
            fill="none"
        >
            <Path
                d="M14 0v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 01-.993.993H.993A.994.994 0 010 19.007V2.993C0 2.445.445 2 .993 2H4V0h10zM4 4H2v14h14V4h-2v2H4V4zm2 10v2H4v-2h2zm0-3v2H4v-2h2zm0-3v2H4V8h2zm6-6H6v2h6V2z"
                fill="#000"
            />
        </Svg>
    )
}

export const ProfileIcon =() =>{
    return(
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
        >
            <Path
                d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0010 18zm-5-8h2a3 3 0 006 0h2a5 5 0 11-10 0z"
                fill="#000"
            />
        </Svg>
    )
}
