import React from 'react'
import './headeree.css'
import StatTab from '../statTabee/statTabee';

export default function Header() {
  return (
    <div className="pic">
      <div className="header">
        <div className="headerTitles">
          <h4 className="headerTitleSm">
            Application Statistics
          </h4>
        </div>
        <div className='search'>
            <StatTab job="Posted jobs" number="1"/>
            <StatTab job="Application" number="1"/>
            <StatTab job="Reviews" number="4"/>
            <StatTab job="Shortlisted" number="2"/>
            {/* <input type="text" className='input' name="job" placeholder='job title, keywords' id="" />
            <button className='btn'>Find jobs</button> */}
        </div>
        {/* <img
          className="headerImage"
          src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/11/slider12.jpg"
          alt=""
        /> */}
      </div>
    </div>
  )
}