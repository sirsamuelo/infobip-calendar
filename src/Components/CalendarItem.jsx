import React from 'react'

function CalendarItem({day}) {
  function numberToDay(day) {
    switch(day){
      case 0:
        return 'Sun'
        break
      case 1:
        return 'Mon'
        break
      case 2:
        return 'Tue'
        break
      case 3:
        return 'Wed'
        break  
      case 4:
        return 'Thur'
        break   
      case 5:
        return 'Fri'
        break
      case 6:
        return 'Sat'
        break 
      default:
        return 'Error'
    }
  }

  return (
      <div className='grid-item'>
        <div>
        {day.dateInString}
        </div>
        <div>
        {numberToDay(day.day)}
        </div>
      </div>
  )
}

export default CalendarItem