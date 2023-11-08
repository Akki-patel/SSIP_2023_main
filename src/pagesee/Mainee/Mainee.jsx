import React from "react";
import "./mainee.css";
import Home from '../../pagesee/EmployerHome/EmployerHome';
import SideBar from "../Sidebaree/SideBaree";

const Mainee = () => {
    return (
        <div className="main">
            <SideBar className="side-main"/>
            <Home className="home-main"/>
        </div>
    );
}

export default Mainee;