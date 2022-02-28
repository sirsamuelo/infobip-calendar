import {useState,useEffect} from 'react'
import CalendarItem from './CalendarItem'
import  Legend from './Legend'
import TermsArray from './TermsArray'

function Calendar() {
    const [dates,setDates] = useState([])

    function generate2DArray() {
      const arr = Array(8)
        .fill(0)
        .map(() => [])
    
      let today = new Date()
      let end = new Date()
      const endOfTheCalendar = end.setDate(today.getDate() + 7)
      end = new Date(endOfTheCalendar)
    
      while (today < end) {
        let dateInString = `${today.getDate()}.${
          today.getMonth() + 1
        }.${today.getFullYear()}`
        let day = today.getDay()
        let dateObject = {
          dateInString,
          day,
          isOdd: today.getDate() % 2 === 0 ? true : false,
          isClosed: today.getDay() === 0 ? true : false,
          isSaturday: today.getDay() === 6 ? true : false,
        }
        arr[0].push(dateObject)
        let newDate = today.setDate(today.getDate() + 1)
        today = new Date(newDate)
      }
    
      let morning, time, start, endTerm, isClosed
      for (let i = 1; i < arr.length; i++) {
        isClosed = arr[0][i - 1].isClosed
        morning = arr[0][i - 1].isSaturday
          ? arr[0][i - 1].isSaturday
          : arr[0][i - 1].isOdd
        time = morning ? 8 : 13
        start = new Date(0, 0, 0, time, 0, 0)
        endTerm = new Date(0, 0, 0, time + 6, 0, 0)
        while (start <= endTerm) {
          let dateInString = isClosed
            ? 'closed'
            : `${start.getHours()}:${
                start.getMinutes().toString().startsWith('0')
                  ? start.getMinutes() + '0'
                  : start.getMinutes()
              }`
          arr[i].push(dateInString)
          let newTime = start.setMinutes(start.getMinutes() + 30)
          start = new Date(newTime)
        }
        start = new Date(0, 0, 0, time, 0, 0)
        endTerm = new Date(0, 0, 0, time + 6, 0, 0)
      }
      return arr
    }

      useEffect(() => {
        setDates(generate2DArray())
      },[])

  return (
      <>
        <div className="container">
            <div className="calendar__container">
                <div className="week-row">
                    {dates && dates[0]?.map((day,index) => {
                        return <CalendarItem day={day}  key={index}/>
                      })
                    }
                     {dates && 
                        dates.slice(1).map((terms,index) =>  
                        (
                          <div className="terms-flex" key={index}>
                            <TermsArray terms={terms} />
                          </div>
                        )
                        )
                     }
                      
                      {/* // terms.map((singleTerm,index,elements) => {
                      //   let next = elements[index+1]
                      //   if(next) return <TermItem singleTerm={singleTerm} next={next} key={index} />
                      // }) */}
                     
            </div>
        </div>
        </div>
        <Legend />
      </>
  )
}

export default Calendar