import React from 'react'
import "./jobee.css"

export default function Job() {
  return (
    <div className="job">
        <div className="category">
            <p>Bike Mechanic</p>
        </div>
        <h2 className="jobtitle">
            <p>John Smith</p>
        </h2>
        <div className="job-main">
        <div className="jobInfo">
            <div className="location">
                <i className="flaticon-location"></i>
                <p>Ahmedabad</p>
            </div>
            <div className="time">
                <p>Full time</p>
            </div>
        </div>
        <div className="infoBottom">
            <div className="innerLeft">
                <div>3 November 2023</div>
                <p className="name">Applied Date</p>
            </div>
            <div className="right">
                <div className="logo">
                    <img src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/05/y2.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}