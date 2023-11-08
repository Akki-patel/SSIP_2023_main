import React from "react";
import "./sidebar.css";
import profile from "./profile.png";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
    <div className="side-bar">
        <div className="side-bar-upper">
            <div className="profile-image">
                <img className="prof-img" src={profile} alt="user"/>
            </div>
            <div className="name-location-button">
                <a className="profile-name">Employee</a>
                <a className="profile-location">Ahmedabad</a>
                <button className="view-profile" onclick="www.google.com">View Profile</button>
            </div>
        </div>
        <div className="side-bar-lower">
            <div className="lower-list">
                <ul>
                    <li><a href="#">User Dashboard</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><Link to="/find-job">Find jobs</Link></li>
                    <li><a href="#">Applied jobs</a></li>
                    {/* <li><a href="#">Shortlisted</a></li> */}
                    {/* <li><a href="#">Following Employers</a></li> */}
                    {/* <li><a href="#">Alert jobs</a></li> */}
                    {/* <li><a href="#">Message</a></li> */}
                    {/* <li><a href="#">Meetings</a></li> */}
                    {/* <li><a href="#">Change Passwords</a></li> */}
                    <li><a href="#">Log out</a></li>
                </ul>
            </div>
        </div>
    </div>);
}

export default SideBar;