import React, { useState, useEffect } from "react";
import './candidatehome.css'
import Header from '../../components/headercc/Headercc'
import Job from '../../components/jobcc/Jobcc'

export default function Home() {
  return (
    <div className="home-main">
      <Header />
       <div className="jb">
          <h2 className='text'>Jobs applied recently</h2>
       <Job />
       <Job />
       <Job />
       <Job />
       <Job />
       <Job />
       <Job />
       </div>
    </div>
  )
}