import React from "react" 
import "./modal.css"

const Modal = props => {
    if (!props.show) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Modal-title</h4>
            </div>
            <div className="modal-body">
                This is modal content
            </div>
            <div className="modal-footer">
                <button onClick={props.onClose} className="button">ZAMKNIJ</button>
                <button className="button">DODAJ</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Modal