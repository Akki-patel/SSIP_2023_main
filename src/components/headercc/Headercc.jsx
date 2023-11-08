import React from 'react'
import './headercc.css'
import StatTab from '../statTab/statTab';

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
            <StatTab job="Applied jobs" number="7"/>
            <StatTab job="Reviews" number="4"/>
            <StatTab job="Views" number="356"/>
            <StatTab job="Shortlisted" number="2"/>
        </div>
      </div>
    </div>
  )
}