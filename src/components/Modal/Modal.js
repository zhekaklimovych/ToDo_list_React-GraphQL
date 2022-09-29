

import './Modal.css';

const Modal = ({ setOpenModal })=> {
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {setOpenModal(false)}}
                    >
                        X
                    </button>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {setOpenModal(false)}}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;