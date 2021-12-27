import React from 'react';

const Header = ({year, month, setMonth, setYear}) => {
    const days = ["월", "화", "수", "목", "금", "토", "일"]

    const decreaseMonth = (year, month) => {
        if(month === 1){
            setYear(year - 1)
            setMonth(12)
        }else{
            setMonth(month -1)
        }
    }

    const increaseMonth = (year, month) => {
        if(month === 12){
            setYear(year + 1)
            setMonth(1)
        }else{
            setMonth(month + 1)
        }
    }

  return(
    <div>
        <div className="text-3xl flex">
            <div onClick={() => decreaseMonth(year, month)}> &lt; </div>
            <div>{year}년 {month}월</div>
            <div onClick={() => increaseMonth(year, month)}> &gt; </div>
        </div>
        <div className="flex list-none">
            {days.map((day, index) => {
                return <li key={index}>{day}</li>
            })}
        </div>
    </div>
  )
}

export default Header;