import React from 'react';

const Header = ({year, month}) => {
    const days = ["월", "화", "수", "목", "금", "토", "일"]
  return(
    <div>
        <div className="text-3xl flex">
            <div> &lt; </div>
            <div>{year}년 {month}월</div>
            <div> &gt; </div>
        </div>
        <div className="flex">
            {days.map((day, index) => {
                return <li key={index}>{day}</li>
            })}
        </div>
    </div>
  )
}

export default Header;