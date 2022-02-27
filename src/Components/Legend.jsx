import React from 'react'

function Legend() {
  return (
    
    <div className="container">
        <div className="legend">
            <div className="single-legend">
                <span id='legend__free' className="rounded"></span>
                Free time slot
            </div>
            <div className="single-legend">
                <span id="legend__busy" className="rounded"></span>
                Busy at the moment
            </div>
            <div className="single-legend">
                <span id="legend__break" className="rounded"></span>
                Lunch Break
            </div>
            <div className="single-legend">
                <span id="legend__closed" className="rounded"></span>
                Closed
            </div>
        </div>
    </div>

  )
}

export default Legend