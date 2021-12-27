import React from 'react';
import Date from './Date'

const Calendar = ({thisDates}) => {

  return(
    <div>
      {thisDates.map((date, index) => {
        return(
          <Date date={date}/>
        )
      })}
    </div>
  )
}

export default Calendar;