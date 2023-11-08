import React from 'react'
import './EmployerHome.css'
import Header from '../../components/headeree/Headeree'
import Job from '../../components/jobee/Jobee'

export default function Home() {
  return (
    <div className="home-main">
      <Header />
      {/* <Middle /> */}
      <div className="jb">
        <h2 className='text'>Recent Applicants</h2>
        <Job />
        <Job />
      </div>

      {/* <Footer /> */}
    </div>
  )
}