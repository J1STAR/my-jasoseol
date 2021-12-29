import React from 'react';
import Date from './Date'

const Calendar = ({year, month, thisDates, data}) => {

  return(
    <div className="grid grid-cols-7 gap-4 list-none">
      {thisDates.map((date, index) => {
        return(
          <div>
            <Date year={year} month={month} date={date} data={data}/>
          </div>
        )
      })}
    </div>
  )
}

export default Calendar;