import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Job from './Job'

const Date = ({year, month, date, data}) => {

    const [openJobList, setOpenJobList] = useState([])
    const [closedJobList, setClosedJobList] = useState([])

    const matchOpenJob = (year, month, date, data) => {
        let openJobs = []
        data.forEach(d => {
            const jobYear = d.start_time.slice(0, 4)
            const jobMonth = d.start_time.slice(5, 7)
            const jobDate = d.start_time.slice(8, 10)
            if(year == jobYear && month == jobMonth && date == jobDate){
                openJobs.push(d.name)
            }
        })
        console.log(openJobs)
        return openJobs
    }

    const matchClosedJob = (year, month, date, data) => {
        let closedJobs = []
        data.forEach(d => {
            const jobYear = d.end_time.slice(0, 4)
            const jobMonth = d.end_time.slice(5, 7)
            const jobDate = d.end_time.slice(8, 10)
            if(year == jobYear && month == jobMonth && date == jobDate){
                closedJobs.push(d.name)
            }
        })
        console.log(closedJobs)
        return closedJobs
    }

    useEffect(() => {
        setOpenJobList(matchOpenJob(year, month, date, data))
      }, [])

    useEffect(() => {
        setClosedJobList(matchClosedJob(year, month, date, data))
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
                <div className="font-bold">
                    {closedJobList}
                </div>
            </li>
        </div>
    )
}

export default Date;