import React, { useState, useEffect } from 'react'
import Calendar from './component/Calendar';
import Header from './component/Header'

const App = () => {
  let date = new Date()
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth() + 1

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [thisDates, setThisDates] = useState([])

  const getDates = (year, month) => {

    const previousLast = new Date(year, month - 1, 0)
    const thisLast = new Date(year, month, 0)
    const preLastDate = previousLast.getDate()
    const preLastDay = previousLast.getDay()
    const thisLastDate = thisLast.getDate()
    const thisLastDay = thisLast.getDay()
  
    let preDates = []
    let dates = []
    let nextDates = []

    if(preLastDay !== 7){
      for(let i = 0; i < preLastDay; i++){
        preDates.unshift(preLastDate - i)
      }
    }
  
    for(let i = 1; i < 8 - thisLastDay; i++){
      nextDates.push(i)
    }

    dates = [...Array(thisLastDate + 1).keys()].slice(1)

    return preDates.concat(dates, nextDates)
  }

  useEffect(() => {
    setThisDates(getDates(year, month))
  }, [year, month])

  return (
    <div className="App">
      <div>
        <Header year={year} month={month} setMonth={setMonth} setYear={setYear} />
      </div>
      <div className="w-10/12 h-5/6">
        <Calendar thisDates={thisDates} />
      </div>
    </div>
  );
}

export default App;
