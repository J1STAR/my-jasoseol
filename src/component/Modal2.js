import React, { useState, useEffect } from 'react';
import '../Modal.css';

const Modal2 = ({show, onClose, closed, data}) => {
    const [closedJob, setClosedJob] = useState([])

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
        setClosedJob(getClosedJobDetail(closed, data))
    }, [])

    if(!show){
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{closedJob[0]}</h4>
                </div>
                <div className="modal-body">
                {closedJob[2]} ~ {closedJob[3]}
                </div>
                <img src={closedJob[1]}/>
                <div className="modal-footer">
                    <button onClick={onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal2