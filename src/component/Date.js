import React, { useState, useEffect } from 'react';
import Modal from './Modal'

const Date = ({year, month, date, data}) => {
    const [show, setShow] = useState(false)
    const [openJobList, setOpenJobList] = useState([])
    const [closedJobList, setClosedJobList] = useState([])

    const matchOpenJob = (year, month, date, data) => {
        let openJobs = []
        data.forEach(d => {
            const jobYear = d.start_time.slice(0, 4)
            const jobMonth = d.start_time.slice(5, 7)
            const jobDate = d.start_time.slice(8, 10)
            if(year == jobYear && month == jobMonth && date == jobDate){
                openJobs.push(d.name.toString())
            }
        })
        return openJobs
    }

    const matchClosedJob = (year, month, date, data) => {
        let closedJobs = []
        data.forEach(d => {
            const jobYear = d.end_time.slice(0, 4)
            const jobMonth = d.end_time.slice(5, 7)
            const jobDate = d.end_time.slice(8, 10)
            if(year == jobYear && month == jobMonth && date == jobDate){
                closedJobs.push(d.name.toString())
            }
        })
        return closedJobs
    }

    useEffect(() => {
        setOpenJobList(matchOpenJob(year, month, date, data))
      }, [])

    useEffect(() => {
        setClosedJobList(matchClosedJob(year, month, date, data))
    }, [])

    console.log(openJobList, closedJobList)
    return(
        <div>
            <li>
                <div>
                    {date}
                </div>
                <div>
                    {openJobList.map(open => {
                        return(
                            <div>
                            <button onClick={() => setShow(true)}>시작 : {open}</button>
                            <Modal onClose={() => setShow(false)} show={show} open={open}/>
                            </div>
                        )
                    })}
                </div>
                <div className="font-bold">
                    {closedJobList.map(closed => {
                        return(
                            <div>
                            마감 : {closed}
                            </div>
                        )
                    })}
                </div>
            </li>
        </div>
    )
}

export default Date;