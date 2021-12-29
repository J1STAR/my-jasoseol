import React from 'react';
import '../Modal.css';

const Modal = ({show, open, onClose}) => {
    if(!show){
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{open}</h4>
                </div>
                <div className="modal-body">
                    modal
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal