import React from 'react'
import "./statTabee.css"

export default function StatTab(props) {
  return (
    <div className="job">
        <div className="infoBottom">
            <div className="right">
                <div className="logo">
                    <img className="imgLogo" src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/05/y2.jpg" alt="" />
                </div>
            </div>
        </div>
        <h2 className="jobtitle">
            <p>{props.number}</p>
        </h2>
        <div className="jobInfo">
            <div className="location">
                <i className="flaticon-location"></i>
                <p>{props.job}</p>
            </div>
        </div>
        
    </div>
  )
}