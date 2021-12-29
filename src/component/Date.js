import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Job from './Job'

const Date = ({year, month, date, data}) => {

    const [openJobList, setOpenJobList] = useState([])

    const matchOpenJob = (year, month, date, data) => {
        const startDate = moment(data.start_time).format('YYYY-MM-DD')
        const calendarDate = moment(new Date (year, month + 1, date)).format('YYYY-MM-DD')
        let openJobs = []

        if(startDate === calendarDate){
            openJobs.push(data.name)
        }

        return openJobs
    }

    useEffect(() => {
        setOpenJobList(matchOpenJob(year, month, date, data))
      }, [])

    return(
        <div>
            <li>
                <div>
                    {date}
                </div>
                <div>
                    {openJobList}
                </div>
            </li>
        </div>
    )
}

export default Date;