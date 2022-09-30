import {NavLink} from "react-router-dom";
import {useState} from "react";
import {Modal} from "../EditTask/EditTask";
import './Task.css';

const Task = (props) => {
    const  [ modalOpen ,  setModalOpen ]  =  useState ( false ) ;

    if(!modalOpen) {
        return <div className="task-container-wrapper">
            <div className="task-container">
                <div className="task-item">
                    <span className="task-item-title">Title:</span>
                    <span className="task-item-content">{props.data.title}</span>
                </div>
                <div className="task-item">
                    <span className="task-item-title">Status:</span>
                    <span>{props.data.taskStatus}</span>
                </div>
            </div>

            <div className="manage-container">
                <button onClick={ ()=>setModalOpen(true)} className="shine-button edit-btn">Show</button>
                <NavLink to={`/edit/${props?.data?.id}`} className="shine-button edit-btn">Edit</NavLink>
            </div>
        </div>
    }
    return(
        <div>
            {modalOpen && <Modal setOpenModal={setModalOpen} data={props.data}/>}
        </div>
    )
}

export default Task;