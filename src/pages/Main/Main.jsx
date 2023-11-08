import React from "react";
import "./main.css";
import Home from '../CandidateHome/CandidateHome';
import SideBar from "../Sidebar/SideBar";

const Main = () => {
    return (
        <div className="main">
            <SideBar className="side-main"/>
            <Home className="home-main"/>
        </div>
    );
}

export default Main;