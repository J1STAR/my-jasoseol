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

  const getDates = (month) => {

    const previousLast = new Date(currentYear, currentMonth - 1, 0)
    const thisLast = new Date(currentYear, currentMonth, 0)
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
    setThisDates(getDates(month))
  }, [month])

  return (
    <div className="App">
      <Header year={year} month={month} />
      <Calendar thisDates={thisDates} />
    </div>
  );
}

export default App;
