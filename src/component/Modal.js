import React, { useState, useEffect } from 'react';
import '../Modal.css';

const Modal = ({show, open, onClose, closed, data}) => {
    const [openJob, setOpenJob] = useState([])
    const [closedJob, setClosedJob] = useState([])

    const getOpenJobDetail = (open, data) => {
        let detail = []
        data.forEach(d => {
            if(d.name === open){
                detail.push(d.name)
                detail.push(d.image)
                detail.push(d.start_time.slice(0, 10))
                detail.push(d.end_time.slice(0, 10))
                detail.push(d.content)
            }
        })
        return detail
    }

    const getClosedJobDetail = (closed, data) => {
        let detail = []
        data.forEach(d => {
            if(d.name === closed){
                detail.push(d.name)
                detail.push(d.image)
                detail.push(d.start_time.slice(0, 10))
                detail.push(d.end_time.slice(0, 10))
                detail.push(d.content)
            }
        })
        return detail
    }

    useEffect(() => {
        setOpenJob(getOpenJobDetail(open, data))
      }, [])

    useEffect(() => {
        setClosedJob(getClosedJobDetail(closed, data))
    }, [])

    console.log(openJob, closedJob)

    if(!show){
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{openJob[0] || closedJob[0]}</h4>
                </div>
                <div className="modal-body">
                {openJob[2] || closedJob[2]} ~ {openJob[3] || closedJob[3]}
                </div>
                <img src={openJob[1] || closedJob[1]}/>
                <div className="modal-footer">
                    <button onClick={onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal