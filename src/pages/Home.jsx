import React from 'react'
import BgOverlay from '../Components/BgOverlay'
import Calendar from '../Components/Calendar'

function Home() {
  return (
      <>
        <BgOverlay />
        <div className="home-section">
            <div className="home">
                <i className="fa-solid fa-briefcase-medical"></i>
                <h1>Doctors office</h1>
            </div>
            <p>Welcome to the <span>Medical</span> Center <br/> Schedule your Appointment</p>
        </div>

        <Calendar />
      </>
  )
}

export default Home