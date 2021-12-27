import React from 'react';
import Date from './Date'

const Calendar = ({thisDates}) => {

  return(
    <div className="grid grid-cols-7 gap-4 list-none">
      {thisDates.map((date, index) => {
        return(
          <div>
            <Date date={date}/>
          </div>
        )
      })}
    </div>
  )
}

export default Calendar;